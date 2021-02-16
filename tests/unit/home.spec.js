import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import { expect } from 'chai';
import Home from '../../src/components/Home.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe('Home Component', () => {
  it('shows links to send a message and view all messages', () => {
    const wrapper = mount(Home, {
      localVue,
      router,
    });

    expect(wrapper.text()).to.include('Dashboard');
    expect(wrapper.text()).to.include('All Messages');
    expect(wrapper.text()).to.include('New Message');
  });
});
