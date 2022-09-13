
function FileListPlugin(options){};
FileListPlugin.prototype.apply=function(compiler)
{
    compiler.hooks.emit.tapAsync('FileListPlugin',(compilation,callback)=>{
        var fileList='in this build:\n\n';
        for(var filename in compilation.assets){
            fileList+=(`-`+filename+`\n`);
        }
        console.log(compilation.assets);
        compilation.assets['filelist.md']={
            source:function(){
                return fileList;
            },
            size:function(){
                return fileList.length;
            }
        };
    callback();
    });
};
module.exports=FileListPlugin;
