package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class DictionaryImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.Dictionary { 
override internal var internal_eContainer : org.kevoree.modeling.api.KMFContainer? = null
override internal var internal_containmentRefName : String? = null
override internal var internal_unsetCmd : org.kevoree.container.RemoveFromContainerCommand? = null
override internal var internal_readOnlyElem : Boolean = false
override internal var internal_recursive_readOnlyElem : Boolean = false
override internal var internal_modelElementListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override internal var internal_modelTreeListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override var path_cache : String? = null
override fun delete(){
_values?.clear()
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
internal val _values : java.util.HashMap<String,org.kevoree.DictionaryValue> = java.util.HashMap<String,org.kevoree.DictionaryValue>()
override var values:List<org.kevoree.DictionaryValue>
	  get(){
		  return _values.values().toList()
	  }
	 set(valuesP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(valuesP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_values(valuesP, true, true)
}
fun internal_values(valuesP : List<org.kevoree.DictionaryValue>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_values.values()!= valuesP){
_values.clear()
for(el in valuesP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_values.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_values, el),org.kevoree.util.Constants.Ref_values)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_values, valuesP))
}
}
}


private fun doAddValues(valuesP : org.kevoree.DictionaryValue) {
val _key_ = (valuesP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_values.containsKey(_key_)) {
_values.put(_key_,valuesP)
(valuesP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_values, valuesP),org.kevoree.util.Constants.Ref_values)
}
}

override fun addValues(valuesP : org.kevoree.DictionaryValue) {
internal_addValues(valuesP, true, true)
}

override fun addAllValues(valuesP :List<org.kevoree.DictionaryValue>) {
internal_addAllValues(valuesP, true, true)
}

private fun internal_addValues(valuesP : org.kevoree.DictionaryValue, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddValues(valuesP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_values, valuesP))
}
}

private fun internal_addAllValues(valuesP :List<org.kevoree.DictionaryValue>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in valuesP){
doAddValues(el)
}
} else {
for(el in valuesP){
doAddValues(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_values, valuesP))
}
}


override fun removeValues(valuesP : org.kevoree.DictionaryValue) {
internal_removeValues(valuesP, true, true)
}

var removeAllValuesCurrentlyProcessing : Boolean = false

override fun removeAllValues() {
internal_removeAllValues(true, true)
}

private fun internal_removeValues(valuesP : org.kevoree.DictionaryValue, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_values.size() != 0 && _values.containsKey((valuesP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_values.remove((valuesP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(valuesP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllValuesCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_values, valuesP))
}
}
}

private fun internal_removeAllValues(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllValuesCurrentlyProcessing=true
}
val temp_els = values!!
_values.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_values, temp_els))

removeAllValuesCurrentlyProcessing=false
}
}

override fun reflexiveMutator(mutationType : Int, refName : String, value : Any?, setOpposite : Boolean, fireEvents : Boolean) {
when(refName) {
org.kevoree.util.Constants.Att_generated_KMF_ID -> {
this.internal_generated_KMF_ID((value as? String), fireEvents)
}
org.kevoree.util.Constants.Ref_values -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addValues(value as org.kevoree.DictionaryValue, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllValues(value as List<org.kevoree.DictionaryValue>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeValues(value as org.kevoree.DictionaryValue, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllValues()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_values.size() != 0 && _values.containsKey(value)) {
val obj = _values.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_values.remove(value)
_values.put(objNewKey,obj)
}
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
override fun findValuesByID(key : String?) : org.kevoree.DictionaryValue? {
return _values.get(key)
}
override fun findByID(relationName:String,idP : String) : org.kevoree.modeling.api.KMFContainer? {when(relationName) {
org.kevoree.util.Constants.Ref_values -> {
return findValuesByID(idP)}
else -> {return null}
}
}





override fun visit(visitor : org.kevoree.modeling.api.util.ModelVisitor, recursive : Boolean, containedReference : Boolean,nonContainedReference : Boolean){
            visitor.beginVisitElem(this)
                                                    if(containedReference){
                                                    visitor.beginVisitRef(org.kevoree.util.Constants.Ref_values, org.kevoree.util.Constants.org_kevoree_DictionaryValue)
                                    for(KMFLoopEntryKey in _values.keySet()){
                        internal_visit(visitor,_values.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_values)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_values)
                                    }
                                                                                      visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(generated_KMF_ID,org.kevoree.util.Constants.Att_generated_KMF_ID,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_Dictionary;
}
override public fun getGenerated_KMF_ID() : String? { return generated_KMF_ID}
override public fun setGenerated_KMF_ID(internal_p : String?) { generated_KMF_ID = internal_p }
override public fun getValues() : List<org.kevoree.DictionaryValue>{ return values}
override public fun setValues(internal_p : List<org.kevoree.DictionaryValue>){ values = internal_p }
}
