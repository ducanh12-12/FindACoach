<template>
    <form @submit.prevent="submit">
      <div>
          <label for="description">Description</label>
          <textarea :class="!form.description.isValid ? 'requied' : ''" @change="handleChange('description')" cols="40" rows="6" name="description" v-model="form.description.val"></textarea>
          <p :class="!form.description.isValid ? 'requied-message' : 'hidden'">This field is requied</p>
      </div>
      <div>
          <label for="hourlyRate">Hourly Rate</label>
          <input :class="!form.hourlyRate.isValid ? 'requied' : ''" @change="handleChange('hourlyRate')" type="number" name="hourlyRate" v-model="form.hourlyRate.val">
          <p :class="!form.hourlyRate.isValid ? 'requied-message' : 'hidden'">This field is requied</p>
      </div>
      <div>
          <label for="hourlyRate">Areas of Expertise</label>
          <div class="areas">
              <div>
                  <input type="checkbox" name="frontend" value="frontend" v-model="frontend">
                  <label for="frontend">Frontend Development</label>
              </div>
              <div>
                  <input type="checkbox" name="backend" value="backend" v-model="backend">
                  <label for="backend">Backend Development</label>
              </div>
              <div>
                  <input type="checkbox" name="career" value="career" v-model="career">
                  <label for="career">Career Advisory</label>
              </div>
          </div>
          <p :class="!form.areas.isValid ? 'requied-message' : 'hidden'">This field is requied</p>
      </div>
      <button type="submit">Register</button>
    </form>
  </template>
  
  <script>
  export default {
      data() {
          return {
            user: JSON.parse(localStorage.getItem('user')),
            form: {
                  description: {
                    val: '',
                    isValid: true,
                  },
                  hourlyRate: {
                    val: '',
                    isValid: true,
                  },
                  areas: {
                    val: [],
                    isValid: true,
                  },
              },
            frontend: false,
            backend: false,
            career: false,
            validate : true,
          }
      },
      watch:{
          'frontend' : {
            handler() {
                this.frontend ? this.form.areas.val.push('frontend') : this.form.areas.val.splice(this.form.areas.val.indexOf('frontend',1))
            }
          },
          backend() {
              this.backend ? this.form.areas.val.push('backend') : this.form.areas.val.splice(this.form.areas.val.indexOf('backend',1))
          },
          career() {
              this.career ? this.form.areas.val.push('career') : this.form.areas.val.splice(this.form.areas.val.indexOf('career',1))
          },
          form : {
            handler () {
                if (this.form.areas.val.length > 0) {
                    this.form.areas.isValid = true;
                }
            },
            deep:true
          },
      },
      methods:{
          validateForm() {
              this.validate= true;
              if(this.form.description.val === '') {
                  this.validate = false;
                  this.form.description.isValid = false;
              }
              if(this.form.hourlyRate.val === '') {
                  this.validate = false;
                  this.form.hourlyRate.isValid = false;
              }
              if(this.form.areas.val.length == 0) {
                  this.validate = false;
                  this.form.areas.isValid = false;
              }
          },
          submit() {
              this.validateForm();
              if (this.validate) {
                const formData = {
                    name: this.user.name,
                    description: this.form.description.val,
                    hourlyRate: '$' + this.form.hourlyRate.val + '/hour',
                    areas: this.form.areas.val
                }
                  this.$emit('register',formData)
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
          margin-bottom: 5px;
      }
      form div label {
          font-weight: 600;
      }
      p {
        margin: 0px;
      }
      .areas {
          flex-direction: column;
          gap: 0px;
      }
      .areas div {
          flex-direction: row;
      }
      .areas div label {
          font-weight: 400;
      }
      button {
          background-color: #3a0061;
          color: white;
      }
  </style>