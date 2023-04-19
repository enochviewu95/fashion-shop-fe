import { getData } from "../services/apis";

class Banner {
  constructor(title, imageUrl, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  static async getBanner(url){
    return await getData(url)
  }

  addBanner(){

  }

  static deleteBanner(bannerId){

  }

  static editBanner(bannerId){

  }
}


export default Banner