package org.kevoree.factory
object Package {
 public val ORG_KEVOREE : Int = 0
fun getPackageForName(metaClassName : String) : Int {
 if(metaClassName.startsWith("org.kevoree")){return 0}
return -1
}
}
