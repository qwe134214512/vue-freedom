export default {
  name: 'VCol',
  componentName: 'VCol',
  props: {
    span: { // 栅格占据的列数
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [ Number, Object ],
    sm: [ Number, Object ],
    md: [ Number, Object ],
    lg: [ Number, Object ]
  },
  computed: {
    gutter () {
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== 'VRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    }
  },
  render (h) {
    let classList = []
    let style = {}

    if(this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px';
      style.paddingRight = style.paddingLeft;
    }

    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      if (this[prop] || this[prop] === 0) {
        classList.push(
          prop !== 'span'
            ? `v-col-${prop}-${this[prop]}`
            : `v-col-${this[prop]}`
        )
      }
    });

    ['xs', 'sm', 'md', 'lg'].forEach(size => {
      if (typeof this[size] === 'number') {
        classList.push(`w-col-${size}-${this[size]}`);
      } else if (typeof this[size] === 'object') {
        let props = this[size];
        Object.keys(props).forEach(prop => {
          classList.push(
            prop !== 'span'
              ? `v-col-${size}-${prop}-${props[prop]}`
              : `v-col-${size}-${props[prop]}`
          );
        });
      }
    });

    return h(this.tag, {
      class: ['v-col', classList],
      style
    }, this.$slots.default)
  }
}
