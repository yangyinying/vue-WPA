<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-8">
        <div class="section content-title-group">
          <h2 class="title">Nodes</h2>
          <ul>
            <li v-for="node in nodes" :key="node.id">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <div :key="node.name" class="name">
                      {{ node.nodeName }}
                    </div>
                  </div>
                </div>
                <footer class="card-footer">
                  <router-link
                    tag="button"
                    class="link card-footer-item"
                    :to="{
                      name: 'nodeDetail',
                      params: { id: node.id },
                    }"
                  >
                    <span>Select</span>
                  </router-link>
                </footer>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dataService } from '../shared';

export default {
  name: 'Nodes',
  data() {
    return {
      nodes: [],
    };
  },
  async created() {
    await this.loadNodes();
  },
  methods: {
    async loadNodes() {
      this.nodes = [];
      this.nodes = await dataService.getNodes();
    },
  },
};
</script>
