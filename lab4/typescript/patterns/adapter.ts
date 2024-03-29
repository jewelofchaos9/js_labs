class XmlDataProvider {
  public getByKey() {
    // get its from xml file and returns as xml structure
  }
}

class XmlToJsonAdapter {
  adaptee: XmlDataProvider;
  constructor(adaptee: XmlDataProvider) {
    this.adaptee = adaptee;
    // 
  }

  public getByKey() {
    //  get it from xml file and returns as json val
  }
}
