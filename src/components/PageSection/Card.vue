<template>
  <section class="section">
    <div class="container">
      <ul
        class="container-filter list-unstyled categories-filter text-center"
        id="filter"
      >
        <li
          class="list-inline-item"
          v-for="item in professionFilter"
          :key="item.id"
        >
          <a
            class="categories border d-block text-dark rounded"
            @click="updateFilter(item.name)"
            :class="{ active: filterCategory == item.name }"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>

      <div class="row projects-wrapper">
        <div
          class="col-xl-3 col-md-4 col-sm-6 col-12 mt-4 pt-2 business"
          v-for="(item, index) in filteredData"
          :key="index"
        >
          <div
            class="
              card
              blog
              border-0
              work-container work-classic
              shadow
              rounded-md
              overflow-hidden
            "
            style="min-height: 380px"
          >
            <img :src="item.image" class="img-fluid work-image" alt="" />
            <div class="card-body">
              <div class="content">
                <a href="javascript:void(0)" class="badge badge-primary">
                  {{ professionData(item.suffix) }}
                </a>
                <h5 class="mt-3" style="min-height: 60px">
                  {{ `${item.prefix} ${item.monster}` }}
                </h5>
                <div class="post-meta d-flex justify-content-between mt-3">
                  <ul class="list-unstyled mb-0">
                    <li class="list-inline-item mr-2 mb-0">
                      <a href="javascript:void(0)" class="text-muted like">
                        <span>{{ `#${item.id}` }}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getContractInfo } from '@/utils/contract/getContractInfo'
import { professionData, professionFilter } from '@/utils/utils'
export default {
  name: 'Card',
  data() {
    return {
      monsterList: [],
      professionFilter,
      filterCategory: 'all',
    }
  },
  async created() {
    const dataList = await getContractInfo()
    this.monsterList = dataList
  },
  computed: {
    filteredData: function () {
      if (this.filterCategory === 'all') {
        return this.monsterList
      } else {
        return this.monsterList.filter(
          (x) => professionData(x.suffix) === this.filterCategory
        )
      }
    },
  },
  methods: {
    professionData,
    updateFilter(filterName) {
      this.filterCategory = filterName
    },
  },
}
</script>
