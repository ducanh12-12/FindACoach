<template>
    <form @submit.prevent="submit">
      <div>
          <label for="username">Username</label>
          <input
          name="username" 
          placeholder="Username"
          v-model="form.username.val" 
          :class="!form.username.isValid ? 'requied' : ''" 
          @change="handleChange('username')" 
          >
          <p :class="!form.username.isValid ? 'requied-message' : 'hidden'">Username is required</p>
      </div>
      <div>
          <label for="password">Password</label>
          <input
          v-model="form.password.val" 
          placeholder="Password"
          :class="!form.password.isValid ? 'requied' : ''" 
          type="password" 
          name="password" 
          @change="handleChange('password')" 
          >
          <p :class="!form.password.isValid ? 'requied-message' : 'hidden'">Password is required</p>
      </div>
      <div class="button">
          <button type="submit">Login</button>
        </div>
    </form>
  </template>
  
  <script>
  export default {
      data() {
          return {
              form: {
                  username: {
                    val: '',
                    isValid: true,
                  },
                  password: {
                    val: '',
                    isValid: true,
                  },
              },
              validate : true,
          }
      },
      methods:{
          validateForm() {
              this.validate= true;
              if(this.form.username.val === '') {
                  this.validate = false;
                  this.form.username.isValid = false;
              }
              if(this.form.password.val === '') {
                  this.validate = false;
                  this.form.password.isValid = false;
              }
          },
          submit() {
              this.validateForm();
              if (this.validate) {
                const formData = {
                    username: this.form.username.val,
                    password: this.form.password.val,
                }
                  this.$emit('login',formData)
              }
          },
          handleChange(field) {
            this.form[field].isValid = true;
          }
      }
  
  }
  </script>
  
  <style scoped>
      form div {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 10px;
      }
      form div label {
          font-weight: 600;
      }
      p {
        margin: 0px;
      }
      input {
        font-size: 16px;
        padding: 5px 10px;
      }
      button {
          background-color: #3a0061;
          color: white;
          margin-left: auto;
          padding: 10px 30px;
      }
  </style>