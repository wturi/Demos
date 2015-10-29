var forEach=function(list,callback){
		for(var i=0;i<list.length;i++){
			callback(list[i],i,list);
	}
}