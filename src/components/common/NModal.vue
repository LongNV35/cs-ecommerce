<template>
  <div class="container" id="crudApp">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="row">
          <div class="col-md-12" align="right">
            <input type="button" class="btn-custom" @click="openModel" value="Add"/>
          </div>
        </div>
      </div>
    </div>
    <div v-if="myModel">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">{{ dynamicTitle }}</h4>
                  <button type="button" class="close" @click="myModel=false"><span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="form-group">
<!--                    <label>Enter First Name</label>-->
<!--                    <input type="text" class="form-control" v-model="first_name"/>-->
                  </div>
                  <div class="form-group">
<!--                    <label>Enter Last Name</label>-->
<!--                    <input type="text" class="form-control" v-model="last_name"/>-->
                  </div>
                  <br/>
                  <div>
<!--                    <input type="hidden" v-model="hiddenId"/>-->
                    <input type="button" class="btn-custom btn-add" v-model="actionButton" />
                    <input type="button" class="btn-custom btn-close" value="Close" @click="myModel=false" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      allData: '',
      myModel: false,
      actionButton: 'Save',
      dynamicTitle: 'Add Data',
    }
  },

  methods: {
    openModel: function () {
      this.actionButton = "Save";
      this.dynamicTitle = "Add Product";
      this.myModel = true;
    },
  },

}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.btn-custom {
  background-color: #ed4014;
  border-color: #ed4014;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: #ffffff;
  display: inline-block;
  font-family: Helvetica Neue;
  font-size: 14px;
  line-height: 21px;
  margin: 0px 0px 0px 8px;
  padding: 0px 15px;
  text-align: center;
}
</style>












