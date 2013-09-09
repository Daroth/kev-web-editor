

package org.kevoree.container

class RemoveFromContainerCommand(val target : org.kevoree.modeling.api.KMFContainer, val mutatorType : Int, val refName : String, val element : Any?) {
    fun run() {
        target.reflexiveMutator(mutatorType,refName, element,true,true)
    }
}