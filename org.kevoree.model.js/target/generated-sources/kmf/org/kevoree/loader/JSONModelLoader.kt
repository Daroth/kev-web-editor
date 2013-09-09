package org.kevoree.loader
class JSONModelLoader : org.kevoree.modeling.api.json.JSONModelLoader() {
override var factory : org.kevoree.modeling.api.KMFFactory? = org.kevoree.factory.MainFactory()
}
