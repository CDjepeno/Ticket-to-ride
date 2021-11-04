export class Utils {
  static generateUniqueId() {
      const id = () =>
          Math.floor((1 + Math.random()) * 0x10000)
      return id()
  }
}