package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class NodeNetworkImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.NodeNetwork { 
override internal var internal_eContainer : org.kevoree.modeling.api.KMFContainer? = null
override internal var internal_containmentRefName : String? = null
override internal var internal_unsetCmd : org.kevoree.container.RemoveFromContainerCommand? = null
override internal var internal_readOnlyElem : Boolean = false
override internal var internal_recursive_readOnlyElem : Boolean = false
override internal var internal_modelElementListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override internal var internal_modelTreeListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override var path_cache : String? = null
override fun delete(){
_link?.clear()
initBy = null
target = null
}
public override var generated_KMF_ID : String? = ""+Math.random() + java.util.Date().getTime()
	 set(iP : String?){
internal_generated_KMF_ID(iP, true)
	}//end of setter

	private fun internal_generated_KMF_ID(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != generated_KMF_ID){
val oldPath = path()
val oldId = internalGetKey()
val previousParent = eContainer();
val previousRefNameInParent = getRefInParent();
$generated_KMF_ID = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_generated_KMF_ID, generated_KMF_ID))
}
if(previousParent!=null){
previousParent.reflexiveMutator(org.kevoree.modeling.api.util.ActionType.RENEW_INDEX, previousRefNameInParent!!, oldId,false,false);
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.RENEW_INDEX, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Att_generated_KMF_ID, path()))
}
	}
	}//end of setter
internal val _link : java.util.HashMap<String,org.kevoree.NodeLink> = java.util.HashMap<String,org.kevoree.NodeLink>()
override var link:List<org.kevoree.NodeLink>
	  get(){
		  return _link.values().toList()
	  }
	 set(linkP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(linkP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_link(linkP, true, true)
}
fun internal_link(linkP : List<org.kevoree.NodeLink>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_link.values()!= linkP){
_link.clear()
for(el in linkP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_link.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_link, el),org.kevoree.util.Constants.Ref_link)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_link, linkP))
}
}
}


private fun doAddLink(linkP : org.kevoree.NodeLink) {
val _key_ = (linkP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_link.containsKey(_key_)) {
_link.put(_key_,linkP)
(linkP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_link, linkP),org.kevoree.util.Constants.Ref_link)
}
}

override fun addLink(linkP : org.kevoree.NodeLink) {
internal_addLink(linkP, true, true)
}

override fun addAllLink(linkP :List<org.kevoree.NodeLink>) {
internal_addAllLink(linkP, true, true)
}

private fun internal_addLink(linkP : org.kevoree.NodeLink, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddLink(linkP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_link, linkP))
}
}

private fun internal_addAllLink(linkP :List<org.kevoree.NodeLink>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in linkP){
doAddLink(el)
}
} else {
for(el in linkP){
doAddLink(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_link, linkP))
}
}


override fun removeLink(linkP : org.kevoree.NodeLink) {
internal_removeLink(linkP, true, true)
}

var removeAllLinkCurrentlyProcessing : Boolean = false

override fun removeAllLink() {
internal_removeAllLink(true, true)
}

private fun internal_removeLink(linkP : org.kevoree.NodeLink, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_link.size() != 0 && _link.containsKey((linkP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_link.remove((linkP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(linkP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllLinkCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_link, linkP))
}
}
}

private fun internal_removeAllLink(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllLinkCurrentlyProcessing=true
}
val temp_els = link!!
_link.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_link, temp_els))

removeAllLinkCurrentlyProcessing=false
}
}

override var initBy:org.kevoree.ContainerNode?=null
	 set(initByP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
internal_initBy(initByP, true, true)
}
fun internal_initBy(initByP : org.kevoree.ContainerNode?, setOpposite : Boolean, fireEvents : Boolean ) {
if($initBy!= initByP){
$initBy = initByP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_initBy, initByP))
}
}
}

override var target:org.kevoree.ContainerNode?=null
	 set(targetP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
internal_target(targetP, true, true)
}
fun internal_target(targetP : org.kevoree.ContainerNode?, setOpposite : Boolean, fireEvents : Boolean ) {
if($target!= targetP){
$target = targetP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_target, targetP))
}
}
}

override fun reflexiveMutator(mutationType : Int, refName : String, value : Any?, setOpposite : Boolean, fireEvents : Boolean) {
when(refName) {
org.kevoree.util.Constants.Att_generated_KMF_ID -> {
this.internal_generated_KMF_ID((value as? String), fireEvents)
}
org.kevoree.util.Constants.Ref_link -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addLink(value as org.kevoree.NodeLink, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllLink(value as List<org.kevoree.NodeLink>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeLink(value as org.kevoree.NodeLink, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllLink()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_link.size() != 0 && _link.containsKey(value)) {
val obj = _link.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_link.remove(value)
_link.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_initBy -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.SET -> {
      this.internal_initBy(value as? org.kevoree.ContainerNode, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_initBy(null, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD -> {
        this.internal_initBy(value as? org.kevoree.ContainerNode, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_target -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.SET -> {
      this.internal_target(value as? org.kevoree.ContainerNode, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_target(null, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD -> {
        this.internal_target(value as? org.kevoree.ContainerNode, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
    else -> { throw Exception("Can reflexively "+mutationType+" for "+refName + " on "+ this) }
}
}
override fun internalGetKey() : String? {
return  generated_KMF_ID
}
override fun findLinkByID(key : String?) : org.kevoree.NodeLink? {
return _link.get(key)
}
override fun findByID(relationName:String,idP : String) : org.kevoree.modeling.api.KMFContainer? {when(relationName) {
org.kevoree.util.Constants.Ref_link -> {
return findLinkByID(idP)}
org.kevoree.util.Constants.Ref_initBy -> {
val objFound = initBy
if(objFound!=null && (objFound as org.kevoree.container.KMFContainerImpl).internalGetKey() == idP){
return objFound
}else{return null}
}
org.kevoree.util.Constants.Ref_target -> {
val objFound = target
if(objFound!=null && (objFound as org.kevoree.container.KMFContainerImpl).internalGetKey() == idP){
return objFound
}else{return null}
}
else -> {return null}
}
}





override fun visit(visitor : org.kevoree.modeling.api.util.ModelVisitor, recursive : Boolean, containedReference : Boolean,nonContainedReference : Boolean){
            visitor.beginVisitElem(this)
                                                    if(containedReference){
                                                    visitor.beginVisitRef(org.kevoree.util.Constants.Ref_link, org.kevoree.util.Constants.org_kevoree_NodeLink)
                                    for(KMFLoopEntryKey in _link.keySet()){
                        internal_visit(visitor,_link.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_link)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_link)
                                    }
                                                                                                                       if(nonContainedReference){
                                                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_initBy, org.kevoree.util.Constants.org_kevoree_ContainerNode)
                                                    internal_visit(visitor,initBy,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_initBy)
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_initBy)
                                                                                                        visitor.beginVisitRef(org.kevoree.util.Constants.Ref_target, org.kevoree.util.Constants.org_kevoree_ContainerNode)
                                                    internal_visit(visitor,target,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_target)
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_target)
                                                          }
                      visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(generated_KMF_ID,org.kevoree.util.Constants.Att_generated_KMF_ID,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_NodeNetwork;
}
override public fun getGenerated_KMF_ID() : String? { return generated_KMF_ID}
override public fun setGenerated_KMF_ID(internal_p : String?) { generated_KMF_ID = internal_p }
override public fun getLink() : List<org.kevoree.NodeLink>{ return link}
override public fun setLink(internal_p : List<org.kevoree.NodeLink>){ link = internal_p }
override public fun getInitBy() : org.kevoree.ContainerNode?{ return initBy}
override public fun setInitBy(internal_p : org.kevoree.ContainerNode?){ initBy = internal_p }
override public fun getTarget() : org.kevoree.ContainerNode?{ return target}
override public fun setTarget(internal_p : org.kevoree.ContainerNode?){ target = internal_p }
}
