/**
 * 根据名称获取传入的参数值(URL中的请求参数)
 * @param {Object} name
 */
function GetQueryString(name) {

   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");

   var r = window.location.search.substr(1).match(reg);

   if (r!=null) return unescape(r[2]); return null;

}

/**
 * 获取图片超链接
 * @param {Object} key
 * @param {Object} width
 * @param {Object} height
 */
function PictureServerUrl(key,width,height){
	var baseUrl='http://192.168.20.225:8080/';
	var url=baseUrl+'image-service/common/image_get?systemId=dev&key='+key;
	if(width&&height)
	url+='&width='+widht+'&height'+height;
	return url;
}
