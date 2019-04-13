import ToastConfig from './toast';

let toastPlugin = {};

toastPlugin.install = function(Vue, options) {
  // 返回一个实例构造器
  const toastConstructor = Vue.extend(ToastConfig);
  // 实例出现
  toastConstructor.prototype.show = function (duration=2000) {
    this.visible = true;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      this.hide();
    }, duration)
  };
  // 实例隐藏
  toastConstructor.prototype.hide = function () {
    this.visible = false;
  };

  // toast实例
  let instance;
  let timer;

  Vue.prototype.$toast = ({ message, duration }) => {
    if (!instance) {
      // 使用构造器实例化一个toast
      instance = new toastConstructor({
        el: document.createElement('div'),
        propsData: {
          visible: false
        }
      });
      // 把toast实例插入到dom中
      document.body.appendChild(instance.$el);
    }
    instance.message = message;
    instance.show(duration);
  }
}

export default toastPlugin
