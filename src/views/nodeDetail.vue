<template>
  <div>
    <div class="section content-title-group">
      <h2 class="title">Node Detail</h2>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">{{ node.nodeName }}</p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="field">
              <label class="label" for="os">OS</label>
              <input class="input" name="os" readonly v-model="node.os" />
            </div>
            <div class="field">
              <label class="label" for="type">Type</label>
              <input class="input" name="type" readonly v-model="node.type" />
            </div>
          </div>
        </div>
        <footer class="card-footer">
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { dataService } from '../shared';

export default {
  name: 'NodeDetail',
  props: {
    id: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      node: {},
    };
  },
  async created() {
    console.log(this.id);
    this.node = await dataService.getNode(this.id);
  },
};
</script>
