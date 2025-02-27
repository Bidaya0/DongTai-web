<template>
  <div class="table-body">
    <div class="flex-between">
      <div :style="{ display: 'flex', flex: 1 }">
        <el-select
          v-model="rule_type"
          class="search-input"
          size="small"
          :placeholder="$t('views.hookPage.selectType')"
          filterable
          clearab
          @change="handleCurrentChange(1)"
        >
          <el-option
            v-for="item in types"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
        <el-input
          v-model="keyword"
          size="small"
          style="width: 260px"
          class="search-input"
          :placeholder="$t('views.hookPage.searchDesc')"
          @keyup.enter.native="handleCurrentChange(1)"
        >
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="handleCurrentChange(1)"
          ></el-button>
        </el-input>
      </div>
      <div>
        <el-button
          size="small"
          style="visibility: hidden"
          class="resetAllBtn"
          @click="hookTypeDialog = true"
          ><i class="el-icon-plus"></i>
          {{ $t('views.hookPage.addHookType') }}</el-button
        >
        <el-button size="small" class="resetAllBtn" @click="hookDialog = true"
          ><i class="el-icon-plus"></i>
          {{ $t('views.hookPage.addHook') }}</el-button
        >
      </div>
    </div>
    <div class="btn-list-batch">
      <span style="color: #38435a">
        {{ $t('views.hookPage.selected') }}
        <span style="color: #4a72ae">{{ multipleSelection.length }} </span
        >{{ $t('views.hookPage.strip') }}
      </span>
      <div>
        <el-button
          size="small"
          class="resetAllBtn open"
          @click="changeStatusBatch('enable')"
          >{{ multipleSelection.length ? '' : $t('views.hookPage.all')
          }}{{ $t('views.hookPage.on') }}</el-button
        >
        <el-button
          size="small"
          class="resetAllBtn stop"
          @click="changeStatusBatch('disable')"
          >{{ multipleSelection.length ? '' : $t('views.hookPage.all')
          }}{{ $t('views.hookPage.off') }}</el-button
        >
        <el-button
          size="small"
          class="resetAllBtn delete"
          @click="changeStatusBatch('delete')"
          >{{ multipleSelection.length ? '' : $t('views.hookPage.all')
          }}{{ $t('views.hookPage.del') }}</el-button
        >
      </div>
    </div>
    <el-table
      class="hookTable"
      :data="tableData"
      style="width: 100%"
      border
      :header-row-style="{
        color: '#000',
        fontWeight: 600,
      }"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
        :fixed="tableData.length ? 'left' : false"
      >
      </el-table-column>
      <template slot="empty">
        <div class="empty-box">
          <span>{{ $t('views.hookPage.empty') }}</span>
        </div>
      </template>
      <el-table-column
        prop="rule_type"
        :label="$t('views.hookPage.hooksType')"
        width="180"
        :fixed="tableData.length ? 'left' : false"
      >
      </el-table-column>
      <el-table-column
        prop="value"
        :label="$t('views.hookPage.ruleInfo')"
        width="340"
      >
      </el-table-column>
      <el-table-column
        prop="source"
        :label="$t('views.hookPage.point')"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="inherit"
        :label="$t('views.hookPage.hoopDeep')"
        width="180"
      >
        <template slot-scope="scope">
          {{
            scope.row.inherit === 'true'
              ? $t('views.hookPage.children')
              : scope.row.inherit === 'all'
              ? $t('views.hookPage.nowChildren')
              : $t('views.hookPage.now')
          }}
        </template>
      </el-table-column>
      <el-table-column
        prop="track"
        :label="$t('views.hookPage.openTrace')"
        width="180"
      >
        <template slot-scope="scope">
          {{
            scope.row.track === 'true'
              ? $t('views.hookPage.yes')
              : $t('views.hookPage.no')
          }}
        </template>
      </el-table-column>
      <el-table-column
        prop="update_time"
        :label="$t('views.hookPage.updateTime')"
        width="180"
      >
        <template slot-scope="scope">
          {{ scope.row.update_time | formatTimestamp }}
        </template>
      </el-table-column>
      <el-table-column
        v-if="rolesCheck(['system_admin', 'talent_admin'], true)"
        prop="user"
        :label="$t('views.hookPage.user')"
        width="180"
      >
      </el-table-column>
      <el-table-column
        align="center"
        header-align="center"
        :label="$t('views.hookPage.status')"
        :fixed="tableData.length ? 'right' : false"
      >
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.enable"
            active-color="#37D7BB"
            inactive-color="#D9DDE1"
            :active-value="1"
            :inactive-value="0"
            @change="changeStatus(scope.row)"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        prop=""
        :label="$t('views.hookPage.address')"
        width="200"
        align="center"
        :fixed="tableData.length ? 'right' : false"
      >
        <template slot-scope="scope">
          <div class="table-btn-box">
            <el-button
              type="text"
              size="small"
              style="color: #4a72ae"
              @click="editRow(scope.row)"
            >
              {{ $t('views.hookPage.edit') }}
            </el-button>
            <span class="l"> | </span>
            <el-popconfirm
              :title="$t('views.hookPage.delpop')"
              @confirm="changeStatus(scope.row, 'delete')"
            >
              <el-button
                slot="reference"
                size="small"
                style="color: #f56262"
                type="text"
                >{{ $t('views.hookPage.del') }}</el-button
              >
            </el-popconfirm>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="pageSize"
      background
      layout=" prev, pager, next, jumper,total, sizes"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>

    <el-dialog :visible.sync="hookTypeDialog">
      <el-form
        :model="hookType"
        :label-width="$i18n.locale === 'en' ? '140px' : '80px'"
        size="small"
      >
        <el-form-item :label="$t('views.hookPage.hookType')">
          <span>{{ fmtType(hookType.type) }}</span>
        </el-form-item>
        <el-form-item label="语言">
          <span>{{ activeLanguageName }}</span>
        </el-form-item>
        <el-form-item :label="$t('views.hookPage.typeName')">
          <el-input
            v-model="hookType.name"
            :placeholder="$t('views.hookPage.namePlaceholder')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('views.hookPage.typeShotName')">
          <el-input
            v-model="hookType.short_name"
            :placeholder="$t('views.hookPage.shotNamePlaceholder')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('views.hookPage.openOrNot')">
          <el-switch
            v-model="hookType.enable"
            active-color="#37D7BB"
            inactive-color="#D9DDE1"
            :active-value="1"
            :inactive-value="0"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <template slot="footer">
        <el-button size="small" @click="clearHookType">{{
          $t('views.hookPage.clear')
        }}</el-button>
        <el-button size="small" type="primary" @click="enterHookType">{{
          $t('views.hookPage.enter')
        }}</el-button>
      </template>
    </el-dialog>

    <el-dialog :visible.sync="hookDialog">
      <el-form
        :model="hook"
        size="small"
        :label-width="$i18n.locale === 'en' ? '140px' : '80px'"
      >
        <el-form-item :label="$t('views.hookPage.hookType')">
          <span>{{ fmtType(hook.type) }}</span>
        </el-form-item>
        <el-form-item :label="$t('views.hookPage.hooksType')">
          <el-select
            v-model="hook.rule_type_id"
            :placeholder="$t('views.hookPage.namePlaceholder')"
          >
            <el-option
              v-for="t in types"
              :key="t.id"
              style="width: 100%"
              :label="t.name"
              :value="t.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('views.hookPage.ruleInfo')">
          <el-input
            v-model="hook.rule_value"
            :placeholder="$t('views.hookPage.ruleInfoPlaceholder')"
          ></el-input>
        </el-form-item>
        <template v-for="(item, key) in hook.source">
          <el-form-item
            :key="'source' + key"
            :label="key === 0 ? $t('views.hookPage.source') : ''"
          >
            <el-select
              v-if="key > 0"
              v-model="item.relation"
              :placeholder="$t('views.hookPage.relation')"
              style="width: 18%"
            >
              <el-option
                v-for="r in relations"
                :key="r.value"
                :label="r.label"
                :value="r.value"
              >
              </el-option>
            </el-select>
            <el-select
              v-model="item.origin"
              :placeholder="$t('views.hookPage.origin')"
              style="width: 18%"
              @change="changeOrigin(item)"
            >
              <el-option
                v-for="o in origins"
                :key="o.value"
                :label="o.label"
                :value="o.value"
                :disabled="
                  (o.value === 'O' &&
                    hook.source.some((i) => i.origin === 'O')) ||
                  (o.value === 'R' && hook.source.some((i) => i.origin === 'R'))
                "
              >
              </el-option>
            </el-select>
            <el-input
              v-if="item.origin === 'P'"
              v-model="item.param"
              :placeholder="$t('views.hookPage.paramPlaceholder')"
              style="width: 10%; margin-left: 10px"
            ></el-input>
            <div style="float: right">
              <el-button
                type="text"
                size="small"
                @click="addSource(hook.source)"
                >{{ $t('views.hookPage.add') }}</el-button
              >
              <el-button
                v-if="hook.source.length > 1"
                size="small"
                type="text"
                @click="deleteSource(hook.source, key)"
                >{{ $t('views.hookPage.del') }}</el-button
              >
            </div>
          </el-form-item>
        </template>
        <el-form-item :label="$t('views.hookPage.track')">
          <el-radio v-model="hook.track" label="true">{{
            $t('views.hookPage.on')
          }}</el-radio>
          <el-radio v-model="hook.track" label="false">{{
            $t('views.hookPage.off')
          }}</el-radio>
        </el-form-item>
        <el-form-item :label="$t('views.hookPage.depth')">
          <el-radio v-model="hook.inherit" label="false">{{
            $t('views.hookPage.onlyNow')
          }}</el-radio>
          <el-radio v-model="hook.inherit" label="true">{{
            $t('views.hookPage.onlyChildren')
          }}</el-radio>
          <el-radio v-model="hook.inherit" label="all">{{
            $t('views.hookPage.nowChildren')
          }}</el-radio>
        </el-form-item>
      </el-form>
      <template slot="footer">
        <el-button size="small" @click="clearHook">{{
          $t('views.hookPage.clear')
        }}</el-button>
        <el-button size="small" type="primary" @click="enterHook">{{
          $t('views.hookPage.enter')
        }}</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import VueBase from '../../../VueBase'
import { Component, Prop } from 'vue-property-decorator'
import { formatTimestamp } from '@/utils/utils'
@Component({
  name: 'HookTable',
  filters: {
    formatTimestamp(date: number | any) {
      return formatTimestamp(date)
    },
  },
})
export default class HookTable extends VueBase {
  @Prop({ default: '0', type: String }) ruleType!: string
  @Prop({ default: 1, type: Number }) activeLanguage!: number
  @Prop({ default: '', type: String }) activeLanguageName!: string
  @Prop({
    default: function () {
      return true
    },
    type: Function,
  })
  getBase!: any

  keyword = ''
  hookTypeDialog = false
  hookDialog = false
  rule_type = ''
  hookType = {
    type: '1',
    name: '',
    short_name: '',
    enable: 1,
    language_id: this.activeLanguage,
  }
  types = []
  hook = {
    id: 0,
    type: '1',
    rule_type_id: '',
    rule_value: '',
    source: [{ relation: '', origin: '', param: '' }],
    inherit: 'false',
    track: 'true',
  }
  relations = [
    { label: this.$t('views.hookPage.or'), value: '|' },
    { label: this.$t('views.hookPage.and'), value: '&' },
  ]
  origins = [
    { label: this.$t('views.hookPage.O'), value: 'O' },
    { label: this.$t('views.hookPage.R'), value: 'R' },
    { label: this.$t('views.hookPage.P'), value: 'P' },
  ]
  tableData = []
  pageSize = 20
  currentPage = 1
  total = 0

  multipleSelection = []
  handleSelectionChange(val: any) {
    this.multipleSelection = val
  }

  async changeStatusBatch(op: string) {
    let str = ''
    switch (op) {
      case 'delete':
        str = this.$t('views.hookPage.del') as string
        break
      case 'enable':
        str = this.$t('views.hookPage.on') as string
        break
      case 'disable':
        str = this.$t('views.hookPage.off') as string
        break
    }
    this.$confirm(
      `${this.$t('views.hookPage.changeOne')}${str}${this.$t(
        'views.hookPage.changeTwo'
      )}`,
      this.$t('views.hookPage.pop') as string,
      {
        confirmButtonText: this.$t('views.hookPage.enter') as string,
        cancelButtonText: this.$t('views.hookPage.clear') as string,
        type: 'warning',
      }
    )
      .then(async () => {
        if (this.multipleSelection.length === 0) {
          this.changeStatusAll(op)
          return
        }
        const ids = this.multipleSelection.map((item: any) => item.id)
        const { status, msg } = await this.services.setting.changeStatusBatch({
          ids: String(ids),
          op,
        })
        if (status !== 201) {
          this.$message({
            type: 'error',
            message: msg,
            showClose: true,
          })
          return
        }
        this.$message({
          type: 'success',
          message: msg,
          showClose: true,
        })
        await this.getBase()
        await this.getTable()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  splitAndIn(str: string, key: string) {
    const arr = str.split(key)
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 != 0) {
        arr.splice(i, 0, key)
        i++
      }
    }
    return arr
  }

  makeParamsArr(arr: any) {
    function fmtParams(params: string, symb: string) {
      const objArr: { relation: string; origin: string; param: string }[] = []
      if (params[0] === 'P') {
        const paramsStr = params.substring(1, params.length)
        const paramsArr = paramsStr.split(',')
        paramsArr.forEach((item) => {
          if (objArr.some((i) => i.origin === 'P')) {
            objArr.push({ relation: '&', origin: 'P', param: item })
          } else {
            objArr.push({ relation: symb, origin: 'P', param: item })
          }
        })
      } else {
        objArr.push({ relation: symb, origin: params, param: '' })
      }
      return objArr
    }
    function fmtParamsArr(arr: any) {
      const source = []
      if (arr.length == 1) {
        source.push(...fmtParams(arr[0], ''))
      } else {
        source.push(...fmtParams(arr[1], arr[0]))
      }
      return source
    }
    const source = []
    const params = []
    let pre = 0
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] == '|' || arr[k] == '&') {
        source.push(arr.slice(pre, k))
        pre = k
      }
      if (k == arr.length - 1) {
        source.push(arr.slice(pre, arr.length))
      }
    }
    for (let i = 0; i < source.length; i++) {
      params.push(...fmtParamsArr(source[i]))
    }
    return params
  }

  async editRow(row: any) {
    const sourceArr = this.splitAndIn(row.source, '|')
    for (let i = 0; i < sourceArr.length; i++) {
      if (sourceArr[i].indexOf('&') > -1) {
        const arr2 = this.splitAndIn(sourceArr[i], '&')
        sourceArr.splice(i, 1, ...arr2)
        i += arr2.length
      }
    }
    const source = this.makeParamsArr(sourceArr)

    this.hook.rule_value = row.value
    this.hook.id = row.id
    this.hook.inherit = row.inherit
    this.hook.source = source
    this.hook.rule_type_id = row.rule_type_id
    this.hookDialog = true
  }

  async getTypes() {
    this.loadingStart()
    const { status, msg, data } = await this.services.setting.ruleTypes({
      type: this.ruleType,
      language_id: this.activeLanguage,
    })
    this.loadingDone()
    if (status !== 201) {
      this.$message({
        type: 'error',
        message: msg,
        showClose: true,
      })
      return
    }
    this.types = data
  }

  addSource(arr: any) {
    arr.push({ relation: '', origin: '', param: '' })
  }
  deleteSource(arr: any, key: number) {
    arr.splice(key, 1)
    arr[0].relation = ''
  }

  changeOrigin(obj: any) {
    if (obj.origin !== 'P') {
      obj.param = ''
    }
  }
  async deleteRule(row: any) {
    this.loadingStart()
    const { status, msg } = await this.services.setting.ruleDelete({
      rule_id: row.id,
    })
    this.loadingDone()
    row.visible = false
    if (status !== 201) {
      this.$message({
        type: 'error',
        message: msg,
        showClose: true,
      })
      return
    }
    await this.getTable()
  }

  async changeStatusAll(status: string) {
    this.loadingStart()
    const obj = await this.services.setting.changeStatus({
      scope: 'all',
      op: status,
      language_id: this.activeLanguage,
      hook_rule_type: this.ruleType,
    })
    this.loadingDone()
    if (obj.status !== 201) {
      this.$message({
        showClose: true,
        message: obj.msg,
        type: 'error',
      })
      return
    }
    this.$message({
      showClose: true,
      message: obj.msg,
      type: 'success',
    })
    this.currentPage = 1
    await this.getBase()
    await this.getTable()
  }

  async changeStatus(row: any, status = '') {
    this.loadingStart()
    const obj = await this.services.setting.changeStatus({
      rule_id: row.id,
      op: status || (row.enable === 0 ? 'disable' : 'enable'),
    })
    this.loadingDone()
    if (obj.status !== 201) {
      this.$message({
        showClose: true,
        message: obj.msg,
        type: 'error',
      })
      return
    }
    await this.getBase()
    await this.getTable()
  }

  clearHookType() {
    this.hookType = {
      type: this.ruleType,
      name: '',
      language_id: this.activeLanguage,
      short_name: '',
      enable: 0,
    }
    this.hookTypeDialog = false
  }
  async enterHookType() {
    this.loadingStart()
    const { status, msg } = await this.services.setting.ruleTypeAdd(
      this.hookType
    )
    this.loadingDone()
    debugger
    if (status !== 201) {
      this.$message({
        type: 'error',
        message: msg,
        showClose: true,
      })
      return
    }
    debugger
    await this.getTypes()
    this.clearHookType()
  }
  fmtType(type: string) {
    switch (type) {
      case '1':
        return this.$t('views.hookPage.spreadType') as string
      case '2':
        return this.$t('views.hookPage.contaminatedType') as string
      case '3':
        return this.$t('views.hookPage.filterType') as string
      case '4':
        return this.$t('views.hookPage.dangerType') as string
      case '5':
        return this.$t('views.hookPage.enterType') as string
    }
  }
  clearHook() {
    this.hook = {
      id: 0,
      type: this.ruleType,
      rule_type_id: '',
      rule_value: '',
      source: [{ relation: '', origin: '', param: '' }],
      inherit: 'false',
      track: 'true',
    }
    this.hookDialog = false
  }
  fmtParams(arr: any) {
    let pStr = ''
    let str = ''
    arr.forEach((item: any) => {
      if (item.origin === 'P' && !pStr) {
        pStr += `${item.relation}${item.origin}${item.param}`
      } else if (item.origin === 'P' && pStr) {
        pStr += `,${item.param}`
      } else {
        str += `${item.relation}${item.origin}`
      }
    })
    return str + pStr
  }
  async enterHook() {
    if (this.hook.id) {
      this.loadingStart()
      const rule_source = this.fmtParams(this.hook.source)
      const { status, msg } = await this.services.setting.modifyAdd({
        rule_id: this.hook.id,
        rule_type_id: this.hook.rule_type_id,
        rule_value: this.hook.rule_value,
        rule_source: rule_source,
        rule_target: '',
        inherit: this.hook.inherit,
        track: this.hook.track,
        language_id: this.activeLanguage,
      })

      this.loadingDone()
      if (status !== 201) {
        this.$message({
          type: 'error',
          message: msg,
          showClose: true,
        })
        return
      }
      await this.getTable()
      this.clearHook()
    } else {
      this.loadingStart()
      const rule_source = this.fmtParams(this.hook.source)
      const { status, msg } = await this.services.setting.ruleAdd({
        rule_type_id: this.hook.rule_type_id,
        rule_value: this.hook.rule_value,
        rule_source: rule_source,
        rule_target: '',
        inherit: this.hook.inherit,
        track: this.hook.track,
        language_id: this.activeLanguage,
      })

      this.loadingDone()
      if (status !== 201) {
        this.$message({
          type: 'error',
          message: msg,
          showClose: true,
        })
        return
      }
      await this.getBase()
      await this.getTable()
      this.clearHook()
    }
  }
  async changeRuleType() {
    this.currentPage = 1
    await this.getTable()
  }
  async getTable() {
    this.loadingStart()
    const { status, msg, data, page } =
      await this.services.setting.hookRuleList({
        page: this.currentPage,
        pageSize: this.pageSize,
        type: this.ruleType,
        strategy_type: this.rule_type,
        language_id: this.activeLanguage,
        keyword: this.keyword,
      })
    this.loadingDone()
    if (status !== 201) {
      this.$message({
        type: 'error',
        message: msg,
        showClose: true,
      })
      return
    }
    this.total = page.alltotal
    if (data.length === 0 && this.currentPage > 1) {
      this.currentPage--
      await this.getTable()
      return
    }
    this.tableData = data
  }
  handleSizeChange(val: number) {
    this.pageSize = val
    this.currentPage = 1
    this.getTable()
  }
  handleCurrentChange(val: number) {
    this.currentPage = val
    this.getTable()
  }
  created() {
    this.hookType.type = this.ruleType
    this.hook.type = this.ruleType
    this.getTable()
    this.getTypes()
  }
}
</script>

<style scoped lang="scss">
.table-body {
  padding: 20px;
  .flex-between {
    display: flex;
    justify-content: space-between;
    padding-bottom: 6px;
    .search-input {
      width: 140px;
      margin-right: 10px;
    }
  }
}
.resetAllBtn {
  border: 1px solid #4a72ae;
  border-radius: 2px;
  background: #fff;
  color: #4a72ae;
}
.btn-list-batch {
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  .stop {
    background: #e6e9ec;
    border-radius: 2px;
    color: #38435a;
    border: 1px solid #e6e9ec;
    padding-top: 6px;
    padding-bottom: 6px;
  }
  .open {
    background: #37d7bb;
    border-radius: 2px;
    color: #ffffff;
    border: 1px solid #37d7bb;
    padding-top: 6px;
    padding-bottom: 6px;
  }
  .delete {
    border: 1px solid #f56262;
    box-sizing: border-box;
    border-radius: 2px;
    background: #fff;
    color: #f56262;
    padding-top: 6px;
    padding-bottom: 6px;
  }
}
::v-deep.el-table th {
  background: #f8f9fb;
}

.hookTable {
  &.el-table {
    ::v-deepth {
      background: #f6f8fa;
    }
  }
}
.table-btn-box {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .el-button {
    box-sizing: border-box;
    font-size: 14px;
  }
  .l {
    color: #38435a;
    line-height: 14px;
    padding: 4px 4px 8px 4px;
    display: inline-block;
  }
  .el-button + .el-button {
    margin-left: 0;
  }
}
</style>
