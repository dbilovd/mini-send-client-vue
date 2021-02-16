import DayJs from 'dayjs';

const mixin = {
  methods: {
    formatDate(date) {
      return DayJs(date).format('MMM D, YYYY H:mm A');
    },
  },
};

export default mixin;
