<template>
  <div class="advanceSearchStyle" v-show="isShow">
    <el-form ref="form" label-width="80px">
      <el-form-item label="资源类型" :gutter="10" >
        <el-checkbox class="checkAllResType" label="" v-model="checkAllResType" style="float: left;margin-right: 10px;" @change="handleResTypeAllChecked">不限</el-checkbox>
        <el-checkbox-group size="small" v-model="params.resType" @change="handleResTypeChecked" style="float: left;">
          <el-checkbox v-for="item in resTypeList" :key="item.dataValue" :label="item.dataValue">{{item.dataName}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="有无资源">
        <el-radio-group v-model="params.hasRes">
          <el-radio class="hasResNone" :label="-1">不限</el-radio>
          <el-radio class="hasRes" :label="1">有</el-radio>
          <el-radio class="hasRes" :label="0">无</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="共享类型">
        <el-checkbox class="checkAllShareType"  label="" v-model="checkAllShareType" style="float: left;margin-right: 10px;"  @change="handleShareTypeAllChecked">不限</el-checkbox>
        <el-checkbox-group size="small" v-model="params.shareType" @change="handleShareTypeChecked" style="float: left;">
          <el-checkbox v-for="item in shareTypeList" :key="item.dataValue" :label="item.dataValue">{{item.dataName}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="开放类型">
        <el-checkbox  class="checkAllOpenType"  label="" v-model="checkAllOpenType" style="float: left;margin-right: 10px;"  @change="handleOpenTypeAllChecked">不限</el-checkbox>
        <el-checkbox-group size="small" v-model="params.openType" @change="handleOpenTypeChecked" style="float: left;">
          <el-checkbox v-for="item in openTypeList" :key="item.dataValue" :label="item.dataValue">{{item.dataName}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="更新周期">
        <el-checkbox class="checkAllRefreshCycle" label="" v-model="checkAllRefreshCycle" style="float: left;margin-right: 10px;"  @change="handleRefreshCycleAllChecked">不限</el-checkbox>
        <el-checkbox-group size="small" v-model="params.refreshCycle" @change="handleRefreshCycleChecked" style="float: left;">
          <el-checkbox v-for="item in refreshCycleList" :key="item.dataValue" :label="item.dataValue">{{item.dataName}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" @click="onSubmit">查询</el-button>
        <el-button size="small" @click="resSet">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name:'advanceSearch',
    components: {},
    props:{
      params: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        hasRes:-2,
        resTypeList:[],
        shareTypeList:[],
        openTypeList:[],
        refreshCycleList:[],
        resType: [],
        isIndeterminateResType : false,
        checkAllResType: true,
        openType:[],
        isIndeterminateOpenType : false,
        checkAllOpenType: true,
        refreshCycle:[],
        isIndeterminateRefreshCycle : false,
        checkAllRefreshCycle: true,
        shareType:[],
        isIndeterminateShareType : false,
        checkAllShareType: true,
        isShow: false,

      }
    },
    created: function () {
      this.getSelectItems();
    },
    methods: {
      init() {
        this.params.resType= [];
        this.isIndeterminateResType = false;
        this.checkAllResType= true;
        this.params.openType=[];
        this.isIndeterminateOpenType = false;
        this.checkAllOpenType= true;
        this.params.refreshCycle=[];
        this.isIndeterminateRefreshCycle = false;
        this.checkAllRefreshCycle= true;
        this.params.shareType=[];
        this.isIndeterminateShareType = false;
        this.checkAllShareType= true;
        this.params.hasRes= -1;
      },
      onSubmit() {
        this.$emit('advanceSearch');
      },
      getSelectItems() {
        let _this = this;
        _this.$get('api/dict/getConfigStaticInfos',{'dataType': 'RES_TYPE'}, function (data) {
          _this.resTypeList = data;
        });
        _this.$get('api/dict/getConfigStaticInfos',{'dataType': 'SHARE_TYPE'}, function (data) {
          _this.shareTypeList = data;
        });
        _this.$get('api/dict/getConfigStaticInfos',{'dataType': 'OPEN_TYPE'}, function (data) {
          _this.openTypeList = data;
        });
        _this.$get('api/dict/getConfigStaticInfos',{'dataType': 'REFRESH_CYCLE'}, function (data) {
          _this.refreshCycleList = data;
        });
      },
      handleResTypeAllChecked(event) {
        if (event.target.checked) {
          this.params.resType.splice(0, this.params.resType.length);
        }
      },
      handleResTypeChecked(value) {
        let count = value.length;
        if (count > 0) {
          this.checkAllResType = false;
        }
      },
      handleOpenTypeAllChecked(event) {
        if (event.target.checked) {
          this.params.openType.splice(0, this.params.openType.length);
        }
      },
      handleOpenTypeChecked(value) {
        let count = value.length;
        if (count > 0) {
          this.checkAllOpenType = false;
        }
      },
      handleRefreshCycleAllChecked(event) {
        if (event.target.checked) {
          this.params.refreshCycle.splice(0, this.params.refreshCycle.length);
        }
      },
      handleRefreshCycleChecked(value) {
        let count = value.length;
        if (count > 0) {
          this.checkAllRefreshCycle = false;
        }
      },
      handleShareTypeAllChecked(event) {
        if (event.target.checked) {
          this.params.shareType.splice(0, this.params.shareType.length);
        }
      },
      handleShareTypeChecked(value) {
        let count = value.length;
        if (count > 0) {
          this.checkAllShareType = false;
        }
      },

      handleAllChecked(event, list,values, isIndeterminate) {
        let valueArray = [];
        for(let i= 0; i< list.length;i++) {
          valueArray.push(list[i].dataValue)
        }

        if (event.target.checked) {
          for(let i= 0; i< valueArray.length;i++) {
            values.push(valueArray[i]);
          }
        } else {
          values.splice(0, values.length);
        }
        return false;
      },
      handleChecked(value, list, result) {
        let count = value.length;
        result.checkAll = (count === list.length);
        result.isIndeterminate = (count > 0) && (count < list.length);
      },
      resSet() {
        this.init();
      }
    }

  }
</script>
<style>
  .advanceSearchStyle {
    border: 1px solid #eaeefb;
    border-radius: 4px;
    transition: .2s;
    font-size: 12px;
    width: 67%;
    padding: 10px 0px 0px 10px;
    margin-left: 5px;
    margin-top: 5px;
    opacity: 1;
    position: absolute;
    background-color: white;
    z-index: 9999;
  }
  .advanceSearchStyle .el-radio__label {
    font-size: 12px;
  }
  .advanceSearchStyle .el-checkbox__label{
    font-size: 12px;
  }
  .advanceSearchStyle .el-form-item__label {
    font-size: 12px;
    line-height: 36px;
    padding: 0px 10px 0px 0px;
  }
  .advanceSearchStyle .el-form-item__content{
    font-size: 12px;
    line-height: 36px;
  }
  .advanceSearchStyle .el-form-item {
    margin-bottom: 10px;
  }

</style>
