<template>
  <div class="card">
    <div
      class="card-title flex-row-space-between"
      style="height: 33px; min-height: 32px"
    >
      <span
        class="title"
        style="font-size: 14px; font-weight: bold; height: 32px"
        ><el-checkbox
          v-model="item.checked"
          style="margin-right: 12px; margin-top: 2px"
        ></el-checkbox>
        <span class="vul-name" :title="itemTitle" @click="goDetail(item)">
          {{ itemTitle }}
        </span>
      </span>
      <span
        class="time flex-column-center"
        style="font-size: 12px; height: 32px"
      >
        {{ item.first_time }}
      </span>
    </div>
    <div class="card-content">
      <Sync
        :item="item"
        :setting-inte="settingInte"
        :get-table-data="getTableData"
        :source_type="1"
      ></Sync>
      <template v-if="item.is_header_vul">
        <div style="height: 120px; margin-top: 18px">
          <div
            v-for="(header_vul_url, index) in item.header_vul_urls.slice(0, 3)"
            :key="index"
            class="header-vul-url"
          >
            {{ header_vul_url.url }}
          </div>
          <el-tooltip
            class="item"
            effect="dark"
            placement="top-start"
            :disabled="item.header_vul_urls.length <= 2"
          >
            <template #content>
              <div style="max-height: 200px; overflow: auto">
                <div
                  v-for="(header_vul_url, index) in item.header_vul_urls"
                  :key="index"
                >
                  {{ header_vul_url.url }}
                </div>
              </div>
            </template>
            <span>更多</span>
          </el-tooltip>
        </div>
      </template>
      <template v-else>
        <div class="top-stack">
          <i class="iconfont iconyuandianzhong"></i>
          <span>
            {{ item.top_stack }}
          </span>
        </div>
        <div class="bottom-stack">
          <i class="iconfont iconyuandianzhong"></i>
          <span>
            {{ item.bottom_stack }}
          </span>
        </div>
      </template>

      <div class="infoLine flex-row-space-between">
        <div class="flex-row-space-between" style="width: 60%">
          <span class="info">
            <i class="iconfont iconyingyong" style="color: #a3b0e2"></i>
            <el-tooltip
              class="item"
              effect="dark"
              :content="item.agent__project_name"
              placement="top-start"
              :disabled="item.agent__project_name.length <= 11"
            >
              <span
                class="dot"
                style="cursor: pointer"
                @click="
                  $router.push(
                    '/project/projectDetail/' + item.agent__bind_project_id
                  )
                "
              >
                {{ item.agent__project_name }}</span
              >
            </el-tooltip>
          </span>
          <span class="info" style="flex: 1.5">
            <i class="iconfont" :class="switchServerType(item.server_type)"></i>
            {{ item.agent__server__container }}
          </span>

          <span
            class="info"
            :style="
              item.level_id === 1
                ? { color: '#EA7171' }
                : item.level_id === 2
                ? { color: '#F39D0A' }
                : item.level_id === 3
                ? { color: '#2E8FE9' }
                : item.level_id === 4
                ? { color: '#7BC1AB' }
                : item.level_id === 4
                ? { color: '#7BC1AB' }
                : ''
            "
          >
            <i class="iconfont iconweixian"></i>
            {{ switchLevel(item.level_id) }}
          </span>
          <span class="info" style="flex: 1.2; line-height: 28px">
            <i
              class="iconfont iconshijian-2"
              style="color: #a2a5ab; font-size: 14px"
            ></i>
            {{ item.latest_time }}
          </span>
        </div>
        <div>
          <!-- <div class="tag">
            {{ item.language }}
          </div>
          <div class="tag2" style="margin-left: 20px">
            {{ item.type }}
          </div> -->
          <div class="tageIcon" style="margin-left: 20px">
            <i
              class="iconfont iconicon_yingyong_table"
              style="color: #e7f5e4"
            ></i>
            <span style="background: #e7f5e4; color: #63974e">
              {{ item.agent__language }}
            </span>
          </div>

          <div class="tageIcon" style="margin-left: 20px">
            <i
              class="iconfont iconicon_yingyong_table"
              style="color: #fce9de"
            ></i>
            <span
              style="background: #fce9de; color: #e07d43"
              :title="item.server_type"
              class="showDot"
            >
              {{ item.server_type }}
            </span>
          </div>

          <div class="tageIcon" style="margin-left: 20px">
            <i
              class="iconfont iconicon_yingyong_table"
              style="color: #e5f3f3"
            ></i>
            <span style="background: #e5f3f3; color: #3c9aa2">
              {{ item.status__name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import { formatTimestamp, getPassedTime } from '@/utils/utils'
import VueBase from '@/VueBase'
import Sync from './sync.vue'
@Component({ name: 'VulnList', components: { Sync } })
export default class VulnList extends VueBase {
  @Prop() item: any
  @Prop() searchObj: any
  @Prop() settingInte: any
  @Prop() getTableData: any

  openWindow(url: string) {
    window.open(url)
  }

  get itemTitle() {
    let title = ''
    title = `${this.item.uri}  ${this.item.http_method} 出现 ${this.item.strategy__vul_name}`
    if (this.item.taint_position) {
      title += '位置:' + this.item.taint_position
    }
    return title
  }

  switchLanguage(language: number) {
    switch (language) {
      case 1:
        return 'JAVA'
      case 2:
        return 'PYTHON'
      case 3:
        return 'PHP'
      case 4:
        return 'G0'
    }
  }
  switchLevel(level: number) {
    switch (level) {
      case 1:
        return '高危'
      case 2:
        return '中危'
      case 3:
        return '低危'
      case 4:
        return '无风险'
      case 5:
        return '提示'
    }
  }

  switchServerType(serverType: string) {
    switch (serverType) {
      case 'tomcat':
        return 'icontomcat'
      case 'jetty':
        return 'iconJetty'
      case 'resin':
        return 'iconresin'
      case 'weblogic':
        return 'iconwebLogic'
      case 'websphere':
        return 'iconwebSphere'
      case 'jboss':
        return 'iconJBoss'

      default:
        return 'iconyingyong'
    }
  }
  private goDetail(item: any) {
    this.$router.push(
      `/vuln/vulnDetail/1/${item.id}?status=` +
        this.searchObj.status +
        '&id=' +
        item.id
    )
  }
}
</script>

<style scoped lang="scss">
.card {
  .tageIcon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 20px;
    }
    span {
      margin-left: -3px;
      display: inline-block;
      line-height: 150%;
      height: 20px;
      font-size: 14px;
      padding-right: 6px;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      font-weight: 500;
    }
  }

  margin-top: 14px;
  width: 100%;
  padding-bottom: 10px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #dee4ea;

  .card-title {
    width: 100%;
    min-height: 48px;
    background: #f1f8ff;
    border-radius: 8px 8px 0 0;
    border-bottom: 1px solid #c8e0ff;
    padding: 0 12px;
    span {
      cursor: pointer;
    }

    .title {
      color: #38435a;
      font-size: 16px;
      max-width: 580px;
      display: flex;
      align-items: center;
    }

    .time {
      font-size: 14px;
      color: #586069;
    }
  }

  .card-content {
    padding: 0 12px;
    position: relative;
    .header-vul-url {
      color: #666;
      margin-bottom: 12px;
    }
    .top-stack {
      margin-top: 18px;
      position: relative;
      color: #9199a2;
      &:before {
        content: '';
        width: 1px;
        height: 20px;
        background: #dee4ea;
        position: absolute;
        left: 5px;
        top: 18px;
      }

      i {
        color: #5491ef;
        font-size: 12px;
        vertical-align: top;
        margin-right: 5px;
      }

      span {
        width: calc(100% - 18px);
        word-break: break-all;
        display: inline-block;
        vertical-align: top;
      }
    }

    .bottom-stack {
      margin-top: 18px;
      color: #9199a2;
      i {
        color: #6ec79f;
        font-size: 12px;
        vertical-align: top;
        margin-right: 5px;
      }

      span {
        width: calc(100% - 18px);
        word-break: break-all;
        display: inline-block;
        vertical-align: top;
      }
    }

    .infoLine {
      margin-top: 18px;

      .info {
        flex: 1;
      }

      .tag {
        display: inline-block;
        color: #fff;
        height: 20px;
        font-size: 14px;
        line-height: 20px;
        background: #5495f3;
        padding-right: 10px;
        padding-left: 4px;
        position: relative;

        &:before {
          position: absolute;
          left: -17px;
          content: '';
          height: 20px;
          width: 18px;
          background-image: url('../../../assets/img/tag.png');
        }
      }

      .tag2 {
        display: inline-block;
        color: #fff;
        height: 20px;
        font-size: 14px;
        line-height: 20px;
        background: #e2ce94;
        padding-right: 10px;
        padding-left: 4px;
        position: relative;

        &:before {
          position: absolute;
          left: -17px;
          content: '';
          height: 20px;
          width: 18px;
          background-image: url('../../../assets/img/tag2.png');
        }
      }
    }
  }

  .icontomcat {
    color: #e6d088;
  }

  .iconJetty {
    color: #5cb896;
  }

  .iconresin {
    color: #86a0d5;
  }

  .iconwebLogic {
    color: #a4cbb9;
  }

  .iconwebSphere {
    color: #888dd1;
  }

  .iconJBoss {
    color: #41bad5;
  }

  .iconyingyong {
    color: #ddcc9e;
  }
}
.dot {
  display: inline-block;
  width: 90px;
  padding-left: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: bottom;
}
.showDot {
  display: inline-block;
  max-width: 100px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.update {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: 12px;
  align-items: center;
  .update-box {
    height: 12px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    padding-left: 8px;
    img {
      margin-right: 4px;
      width: 14px;
    }
    color: #38435a;
    &:hover {
      color: #1a80f2;
    }
  }
  .update-box + .update-box {
    border-left: 1px solid #959fb4;
  }
}

.vul-name {
  overflow: hidden; //超出的文本隐藏
  text-overflow: ellipsis; //溢出用省略号显示
  white-space: nowrap; //溢出不换行
}
</style>
