<template>
  <!--<div>ssss</div>-->
  <div class="mixin-components-container">
    <el-row display="margin-top:10px">
      <el-input v-model="input" placeholder="请输入笔记" style="display:inline-table; width: 30%; float:left"></el-input>
      <el-button type="primary" style="float:left; margin: 2px;" @click="addBook()">新增</el-button>
    </el-row>
    <el-row>
      <el-table :data="bookList" style="width: 100%" border>
        <el-table-column prop="id" label="编号" min-width="100">
          <template scope="scope"> {{ scope.row.pk }} </template>
        </el-table-column>
        <el-table-column prop="book_name" label="笔记" min-width="100">
          <template scope="scope"> {{ scope.row.fields.book_name }} </template>
        </el-table-column>
        <el-table-column prop="add_time" label="添加时间" min-width="100">
          <template scope="scope"> {{ scope.row.fields.add_time }} </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
import { addBook, getBook } from '@/api/books'

export default {
  name: 'book',
  data() {
    return {
      input: '',
      bookList: []
    }
  },
  mounted: function() {
    this.showBooks()
  },
  // created: function() {
  //     this.showBooks()
  // },

  methods: {
    getInput() {
      // return  JSON.stringify({
      //   book_name: this.input
      // })
      return { book_name: this.input }
    },
    addBook() {
      // this.$http.get('http://127.0.0.1:8000/book/add_book?book_name=' + this.input)
      addBook(this.getInput())
        .then((response) => {
          var res = response.data
          if (res['error_num'] === 0) {
            this.showBooks()
          } else {
            this.$message.error('新增书籍失败，请重试')
            console.log(res['msg'])
          }
        })
    },

    showBooks() {
      // this.$http.get('http://127.0.0.1:8000/book/show_books')
      getBook()
        .then((response) => {
          var res = response.data
          // this.bookList = res['list']
          if (res['error_num'] === 0) {
            this.bookList = res['list']
          } else {
            this.$message.error('查询书籍失败')
            console.log(res['msg'])
          }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
