





package org.kevoree.cloner

class DefaultModelCloner() : org.kevoree.modeling.api.ModelCloner {

override fun createContext(): MutableMap<org.kevoree.modeling.api.KMFContainer, org.kevoree.modeling.api.KMFContainer> {
                return java.util.HashMap<org.kevoree.modeling.api.KMFContainer,org.kevoree.modeling.api.KMFContainer>()
            }

    override var mainFactory : org.kevoree.modeling.api.KMFFactory = org.kevoree.factory.MainFactory()

}
