class HelloWorldPlugin{
    constructor(optios)
    {

    }
    apply(compiler)
    {
      compiler.hooks.done.tap('HelloWorldPlugin',compilation=>{
        console.log("Hello World!!!");
      })

    }
}
module.exports=HelloWorldPlugin;