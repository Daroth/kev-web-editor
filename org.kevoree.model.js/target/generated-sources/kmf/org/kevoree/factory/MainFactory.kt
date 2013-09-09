package org.kevoree.factory
class MainFactory : org.kevoree.modeling.api.KMFFactory {

private var factories : Array<org.kevoree.modeling.api.KMFFactory?> = Array<org.kevoree.modeling.api.KMFFactory?>(1, {i -> null});

{
factories.set(Package.ORG_KEVOREE, org.kevoree.impl.DefaultKevoreeFactory())
}
fun getFactoryForPackage( pack : Int) : org.kevoree.modeling.api.KMFFactory? {
return factories.get(pack)
}
fun getKevoreeFactory() : org.kevoree.KevoreeFactory {
return factories.get(Package.ORG_KEVOREE) as org.kevoree.KevoreeFactory
}

fun setKevoreeFactory( fct : org.kevoree.KevoreeFactory) {
factories.set(Package.ORG_KEVOREE,fct)
}


override fun create(metaClassName : String) : org.kevoree.modeling.api.KMFContainer? {
val pack = Package.getPackageForName(metaClassName)
    if(pack != -1) {
        return getFactoryForPackage(pack)?.create(metaClassName)
    } else {
        for(i in factories.indices) {
            val obj = factories[i]!!.create(metaClassName)
            if(obj != null) {
                return obj;
            }
        }
        return null
    }
}
}
