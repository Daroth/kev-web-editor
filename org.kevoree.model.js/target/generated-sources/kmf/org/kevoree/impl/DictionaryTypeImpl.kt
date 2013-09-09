package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class DictionaryTypeImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.DictionaryType { 
override internal var internal_eContainer : org.kevoree.modeling.api.KMFContainer? = null
override internal var internal_containmentRefName : String? = null
override internal var internal_unsetCmd : org.kevoree.container.RemoveFromContainerCommand? = null
override internal var internal_readOnlyElem : Boolean = false
override internal var internal_recursive_readOnlyElem : Boolean = false
override internal var internal_modelElementListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override internal var internal_modelTreeListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override var path_cache : String? = null
override fun delete(){
_attributes?.clear()
_defaultValues?.clear()
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
internal val _attributes : java.util.HashMap<String,org.kevoree.DictionaryAttribute> = java.util.HashMap<String,org.kevoree.DictionaryAttribute>()
override var attributes:List<org.kevoree.DictionaryAttribute>
	  get(){
		  return _attributes.values().toList()
	  }
	 set(attributesP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(attributesP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_attributes(attributesP, true, true)
}
fun internal_attributes(attributesP : List<org.kevoree.DictionaryAttribute>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_attributes.values()!= attributesP){
_attributes.clear()
for(el in attributesP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_attributes.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_attributes, el),org.kevoree.util.Constants.Ref_attributes)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_attributes, attributesP))
}
}
}


private fun doAddAttributes(attributesP : org.kevoree.DictionaryAttribute) {
val _key_ = (attributesP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_attributes.containsKey(_key_)) {
_attributes.put(_key_,attributesP)
(attributesP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_attributes, attributesP),org.kevoree.util.Constants.Ref_attributes)
}
}

override fun addAttributes(attributesP : org.kevoree.DictionaryAttribute) {
internal_addAttributes(attributesP, true, true)
}

override fun addAllAttributes(attributesP :List<org.kevoree.DictionaryAttribute>) {
internal_addAllAttributes(attributesP, true, true)
}

private fun internal_addAttributes(attributesP : org.kevoree.DictionaryAttribute, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddAttributes(attributesP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_attributes, attributesP))
}
}

private fun internal_addAllAttributes(attributesP :List<org.kevoree.DictionaryAttribute>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in attributesP){
doAddAttributes(el)
}
} else {
for(el in attributesP){
doAddAttributes(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_attributes, attributesP))
}
}


override fun removeAttributes(attributesP : org.kevoree.DictionaryAttribute) {
internal_removeAttributes(attributesP, true, true)
}

var removeAllAttributesCurrentlyProcessing : Boolean = false

override fun removeAllAttributes() {
internal_removeAllAttributes(true, true)
}

private fun internal_removeAttributes(attributesP : org.kevoree.DictionaryAttribute, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_attributes.size() != 0 && _attributes.containsKey((attributesP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_attributes.remove((attributesP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(attributesP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllAttributesCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_attributes, attributesP))
}
}
}

private fun internal_removeAllAttributes(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllAttributesCurrentlyProcessing=true
}
val temp_els = attributes!!
_attributes.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_attributes, temp_els))

removeAllAttributesCurrentlyProcessing=false
}
}

internal val _defaultValues : java.util.HashMap<String,org.kevoree.DictionaryValue> = java.util.HashMap<String,org.kevoree.DictionaryValue>()
override var defaultValues:List<org.kevoree.DictionaryValue>
	  get(){
		  return _defaultValues.values().toList()
	  }
	 set(defaultValuesP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(defaultValuesP == null){ throw IllegalArgumentException(org.kevoree.util.Constants.LIST_PARAMETER_OF_SET_IS_NULL_EXCEPTION) }
internal_defaultValues(defaultValuesP, true, true)
}
fun internal_defaultValues(defaultValuesP : List<org.kevoree.DictionaryValue>, setOpposite : Boolean, fireEvents : Boolean ) {
if(_defaultValues.values()!= defaultValuesP){
_defaultValues.clear()
for(el in defaultValuesP){
val elKey = (el as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(elKey == null){throw Exception(org.kevoree.util.Constants.ELEMENT_HAS_NO_KEY_IN_COLLECTION)}
_defaultValues.put(elKey!!,el)
(el as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_defaultValues, el),org.kevoree.util.Constants.Ref_defaultValues)
}
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_defaultValues, defaultValuesP))
}
}
}


private fun doAddDefaultValues(defaultValuesP : org.kevoree.DictionaryValue) {
val _key_ = (defaultValuesP as org.kevoree.container.KMFContainerImpl).internalGetKey()
if(_key_ == "" || _key_ == null){ throw Exception(org.kevoree.util.Constants.EMPTY_KEY) }
if(!_defaultValues.containsKey(_key_)) {
_defaultValues.put(_key_,defaultValuesP)
(defaultValuesP as org.kevoree.container.KMFContainerImpl).setEContainer(this,org.kevoree.container.RemoveFromContainerCommand(this, org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_defaultValues, defaultValuesP),org.kevoree.util.Constants.Ref_defaultValues)
}
}

override fun addDefaultValues(defaultValuesP : org.kevoree.DictionaryValue) {
internal_addDefaultValues(defaultValuesP, true, true)
}

override fun addAllDefaultValues(defaultValuesP :List<org.kevoree.DictionaryValue>) {
internal_addAllDefaultValues(defaultValuesP, true, true)
}

private fun internal_addDefaultValues(defaultValuesP : org.kevoree.DictionaryValue, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
doAddDefaultValues(defaultValuesP)
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_defaultValues, defaultValuesP))
}
}

private fun internal_addAllDefaultValues(defaultValuesP :List<org.kevoree.DictionaryValue>, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if (setOpposite) {
for(el in defaultValuesP){
doAddDefaultValues(el)
}
} else {
for(el in defaultValuesP){
doAddDefaultValues(el)
}
}
if (fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.ADD_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_defaultValues, defaultValuesP))
}
}


override fun removeDefaultValues(defaultValuesP : org.kevoree.DictionaryValue) {
internal_removeDefaultValues(defaultValuesP, true, true)
}

var removeAllDefaultValuesCurrentlyProcessing : Boolean = false

override fun removeAllDefaultValues() {
internal_removeAllDefaultValues(true, true)
}

private fun internal_removeDefaultValues(defaultValuesP : org.kevoree.DictionaryValue, setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(_defaultValues.size() != 0 && _defaultValues.containsKey((defaultValuesP as org.kevoree.container.KMFContainerImpl).internalGetKey())) {
_defaultValues.remove((defaultValuesP as org.kevoree.container.KMFContainerImpl).internalGetKey())
(defaultValuesP!! as org.kevoree.container.KMFContainerImpl).setEContainer(null,null,null)
if(!removeAllDefaultValuesCurrentlyProcessing && fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_defaultValues, defaultValuesP))
}
}
}

private fun internal_removeAllDefaultValues(setOpposite : Boolean, fireEvents : Boolean) {
if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
if(fireEvents){

removeAllDefaultValuesCurrentlyProcessing=true
}
val temp_els = defaultValues!!
_defaultValues.clear()
if(fireEvents){
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.REMOVE_ALL, org.kevoree.modeling.api.util.ElementAttributeType.CONTAINMENT, org.kevoree.util.Constants.Ref_defaultValues, temp_els))

removeAllDefaultValuesCurrentlyProcessing=false
}
}

override fun reflexiveMutator(mutationType : Int, refName : String, value : Any?, setOpposite : Boolean, fireEvents : Boolean) {
when(refName) {
org.kevoree.util.Constants.Att_generated_KMF_ID -> {
this.internal_generated_KMF_ID((value as? String), fireEvents)
}
org.kevoree.util.Constants.Ref_attributes -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addAttributes(value as org.kevoree.DictionaryAttribute, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllAttributes(value as List<org.kevoree.DictionaryAttribute>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeAttributes(value as org.kevoree.DictionaryAttribute, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllAttributes()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_attributes.size() != 0 && _attributes.containsKey(value)) {
val obj = _attributes.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_attributes.remove(value)
_attributes.put(objNewKey,obj)
}
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_defaultValues -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.ADD -> {
this.internal_addDefaultValues(value as org.kevoree.DictionaryValue, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD_ALL -> {
this.internal_addAllDefaultValues(value as List<org.kevoree.DictionaryValue>, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_removeDefaultValues(value as org.kevoree.DictionaryValue, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE_ALL -> {
        this.removeAllDefaultValues()
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
if(_defaultValues.size() != 0 && _defaultValues.containsKey(value)) {
val obj = _defaultValues.get(value)
val objNewKey = (obj as org.kevoree.container.KMFContainerImpl).internalGetKey()

if(objNewKey == null){throw Exception("Key newed to null "+obj)}

_defaultValues.remove(value)
_defaultValues.put(objNewKey,obj)
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
override fun findAttributesByID(key : String?) : org.kevoree.DictionaryAttribute? {
return _attributes.get(key)
}
override fun findDefaultValuesByID(key : String?) : org.kevoree.DictionaryValue? {
return _defaultValues.get(key)
}
override fun findByID(relationName:String,idP : String) : org.kevoree.modeling.api.KMFContainer? {when(relationName) {
org.kevoree.util.Constants.Ref_attributes -> {
return findAttributesByID(idP)}
org.kevoree.util.Constants.Ref_defaultValues -> {
return findDefaultValuesByID(idP)}
else -> {return null}
}
}





override fun visit(visitor : org.kevoree.modeling.api.util.ModelVisitor, recursive : Boolean, containedReference : Boolean,nonContainedReference : Boolean){
            visitor.beginVisitElem(this)
                                                    if(containedReference){
                                                    visitor.beginVisitRef(org.kevoree.util.Constants.Ref_attributes, org.kevoree.util.Constants.org_kevoree_DictionaryAttribute)
                                    for(KMFLoopEntryKey in _attributes.keySet()){
                        internal_visit(visitor,_attributes.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_attributes)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_attributes)
                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_defaultValues, org.kevoree.util.Constants.org_kevoree_DictionaryValue)
                                    for(KMFLoopEntryKey in _defaultValues.keySet()){
                        internal_visit(visitor,_defaultValues.get(KMFLoopEntryKey),recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_defaultValues)
                    }
                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_defaultValues)
                                    }
                                                                                                                          visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(generated_KMF_ID,org.kevoree.util.Constants.Att_generated_KMF_ID,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_DictionaryType;
}
override public fun getGenerated_KMF_ID() : String? { return generated_KMF_ID}
override public fun setGenerated_KMF_ID(internal_p : String?) { generated_KMF_ID = internal_p }
override public fun getAttributes() : List<org.kevoree.DictionaryAttribute>{ return attributes}
override public fun setAttributes(internal_p : List<org.kevoree.DictionaryAttribute>){ attributes = internal_p }
override public fun getDefaultValues() : List<org.kevoree.DictionaryValue>{ return defaultValues}
override public fun setDefaultValues(internal_p : List<org.kevoree.DictionaryValue>){ defaultValues = internal_p }
}
