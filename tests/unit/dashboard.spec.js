import { createLocalVue, mount } from '@vue/test-utils';
import { expect } from 'chai';
import sinon from 'sinon';
import Dashboard from '../../src/components/Dashboard.vue';
import mixin from '../../src/app.mixin';

const localVue = createLocalVue();
localVue.mixin(mixin);

const stats = {
  total: 10,
  failed: 5,
  sent: 16,
  pending: 31,
};

const $api = {
  fetchStats: sinon.stub()
    .returns(Promise.resolve(stats)),
};

describe('Dashboard component', (done) => {
  it('displays default stats values from API', () => {
    const wrapper = mount(Dashboard, {
      localVue,
      mocks: {
        $api,
      },
    });

    wrapper.vm.$nextTick(() => {
      expect(wrapper.text()).to.include(stats.total);
      expect(wrapper.text()).to.include(stats.failed);
      expect(wrapper.text()).to.include(stats.pending);
      expect(wrapper.text()).to.include(stats.sent);
      expect(wrapper.text()).to.include(`${(stats.sent / (stats.total * 100))}%`);
      done();
    });
  });
});
