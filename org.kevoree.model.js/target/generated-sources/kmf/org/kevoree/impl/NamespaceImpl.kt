package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class NamespaceImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.Namespace { 
override internal var internal_eContainer : org.kevoree.modeling.api.KMFContainer? = null
override internal var internal_containmentRefName : String? = null
override internal var internal_unsetCmd : org.kevoree.container.RemoveFromContainerCommand? = null
override internal var internal_readOnlyElem : Boolean = false
override internal var internal_recursive_readOnlyElem : Boolean = false
override internal var internal_modelElementListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override internal var internal_modelTreeListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override var path_cache : String? = null
override fun delete(){
_childs?.clear()
parent = null
}
public override var name : String? = null
	 set(iP : String?){
internal_name(iP, true)
	}//end of setter

	private fun internal_name(iP : String?, fireEvents : Boolean = true){
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(iP != name){
val oldPath = path()
val oldId = internalGetKey()
val previousParent = eContainer();
val previousRefNameInParent = getRefInParent();
$name = iP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.ATTRIBUTE, org.kevoree.util.Constants.Att_name, name))
}
if(previousParent!=null){
previousParent.reflexiveMutator(org.kevoree.modeling.api.util.ActionType.RENEW_INDEX, previousRefNameInParent!!, oldId,false,false);
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(oldPath, org.kevoree.modeling.api.util.ActionType.RENEW_INDEX, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Att_name, path()))
}
	}
	}//end of setter
internal val _childs : java.util.HashMap<String,org.kevoree.Namespace> = java.util.HashMap<String,org.kevoree.Namespace>()
override var childs:List<org.kevoree.Namespace>
	  get(){
		  return _childs.values().toList()
	  }
	 set(childsP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(childsP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_childs(childsP, true, true)
}
fun internal_childs(childsP : List<org.kevoree.Namespace>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_childs.values()!= childsP){
_childs.clear()
for(el in childsP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_childs.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_childs, el),org.kevoree.util.Constants.Ref_childs)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_childs, childsP))
}
}
}


private fun doAddChilds(childsP : org.kevoree.Namespace) {
val _key_ = (childsP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_childs.containsKey(_key_)) {
_childs.put(_key_,childsP)
(childsP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_childs, childsP),org.kevoree.util.Constants.Ref_childs)
}
}

override fun addChilds(childsP : org.kevoree.Namespace) {
internal_addChilds(childsP, true, true)
}

override fun addAllChilds(childsP :List<org.kevoree.Namespace>) {
internal_addAllChilds(childsP, true, true)
}

private fun internal_addChilds(childsP : org.kevoree.Namespace, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddChilds(childsP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_childs, childsP))
}
}

private fun internal_addAllChilds(childsP :List<org.kevoree.Namespace>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in childsP){
doAddChilds(el)
}
} else {
for(el in childsP){
doAddChilds(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_childs, childsP))
}
}


override fun removeChilds(childsP : org.kevoree.Namespace) {
internal_removeChilds(childsP, true, true)
}

var removeAllChildsCurrentlyProcessing : Boolean = false

override fun removeAllChilds() {
internal_removeAllChilds(true, true)
}

private fun internal_removeChilds(childsP : org.kevoree.Namespace, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_childs.size() != 0 && _childs.containsKey((childsP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_childs.remove((childsP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(childsP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllChildsCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_childs, childsP))
}
}
}

private fun internal_removeAllChilds(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllChildsCurrentlyProcessing=true
}
val temp_els = childs!!
_childs.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_childs, temp_els))

removeAllChildsCurrentlyProcessing=false
}
}

override var parent:org.kevoree.Namespace?=null
	 set(parentP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
internal_parent(parentP, true, true)
}
fun internal_parent(parentP : org.kevoree.Namespace?, setOpposite : Boolean, fireEvents : Boolean ) {
if($parent!= parentP){
$parent = parentP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_parent, parentP))
}
}
}

override fun reflexiveMutator(mutationType : Int, refName : String, value : Any?, setOpposite : Boolean, fireEvents : Boolean) {
when(refName) {
org.kevoree.util.Constants.Att_name -> {
this.internal_name((value as? String), fireEvents)
}
org.kevoree.util.Constants.Ref_childs -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addChilds(value as org.kevoree.Namespace, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllChilds(value as List<org.kevoree.Namespace>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeChilds(value as org.kevoree.Namespace, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllChilds()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_childs.size() != 0 && _childs.containsKey(value)) {
val obj = _childs.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_childs.remove(value)
_childs.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_parent -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.SET -> {
      this.internal_parent(value as? org.kevoree.Namespace, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_parent(null, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD -> {
        this.internal_parent(value as? org.kevoree.Namespace, setOpposite, fireEvents)
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
return  name
}
override fun findChildsByID(key : String?) : org.kevoree.Namespace? {
return _childs.get(key)
}
override fun findByID(relationName:String,idP : String) : org.kevoree.modeling.api.KMFContainer? {when(relationName) {
org.kevoree.util.Constants.Ref_childs -> {
return findChildsByID(idP)}
org.kevoree.util.Constants.Ref_parent -> {
val objFound = parent
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
                                                    visitor.beginVisitRef(org.kevoree.util.Constants.Ref_childs, org.kevoree.util.Constants.org_kevoree_Namespace)
                                    for(KMFLoopEntryKey in _childs.keySet()){
                        internal_visit(visitor,_childs.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_childs)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_childs)
                                    }
                                                                                                                       if(nonContainedReference){
                                                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_parent, org.kevoree.util.Constants.org_kevoree_Namespace)
                                                    internal_visit(visitor,parent,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_parent)
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_parent)
                                                          }
                      visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(name,org.kevoree.util.Constants.Att_name,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_Namespace;
}
override public fun getName() : String? { return name}
override public fun setName(internal_p : String?) { name = internal_p }
override public fun getChilds() : List<org.kevoree.Namespace>{ return childs}
override public fun setChilds(internal_p : List<org.kevoree.Namespace>){ childs = internal_p }
override public fun getParent() : org.kevoree.Namespace?{ return parent}
override public fun setParent(internal_p : org.kevoree.Namespace?){ parent = internal_p }
}
