package org.kevoree.loader
class XMIModelLoader : org.kevoree.modeling.api.xmi.XMIModelLoader() {
override var factory : org.kevoree.modeling.api.KMFFactory? = org.kevoree.factory.MainFactory()
}
