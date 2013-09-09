package org.kevoree.impl

/**
 * Created by Kevoree Model Generator(KMF).
 * @developers: Gregory Nain, Fouquet Francois
 * Date: 09 Sep 13 Time: 11:49
 * Meta-Model:NS_URI=http://kevoree/1.0
 */
class MBindingImpl : org.kevoree.container.KMFContainerImpl, org.kevoree.MBinding { 
override internal var internal_eContainer : org.kevoree.modeling.api.KMFContainer? = null
override internal var internal_containmentRefName : String? = null
override internal var internal_unsetCmd : org.kevoree.container.RemoveFromContainerCommand? = null
override internal var internal_readOnlyElem : Boolean = false
override internal var internal_recursive_readOnlyElem : Boolean = false
override internal var internal_modelElementListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override internal var internal_modelTreeListeners : MutableList<org.kevoree.modeling.api.events.ModelElementListener>? = null
override var path_cache : String? = null
override fun delete(){
port = null
hub = null
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
override var port:org.kevoree.Port?=null
	 set(portP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
internal_port(portP, true, true)
}
fun internal_port(portP : org.kevoree.Port?, setOpposite : Boolean, fireEvents : Boolean ) {
if($port!= portP){
if(setOpposite) {
if($port != null) {
$port!!.reflexiveMutator(org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_bindings, this, false, fireEvents)
}
if(portP!=null) {
portP.reflexiveMutator(org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.util.Constants.Ref_bindings, this, false, fireEvents)
}
}
$port = portP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_port, portP))
}
}
}

override var hub:org.kevoree.Channel?=null
	 set(hubP){if(isReadOnly()){throw Exception(org.kevoree.util.Constants.READ_ONLY_EXCEPTION)}
internal_hub(hubP, true, true)
}
fun internal_hub(hubP : org.kevoree.Channel?, setOpposite : Boolean, fireEvents : Boolean ) {
if($hub!= hubP){
if(setOpposite) {
if($hub != null) {
$hub!!.reflexiveMutator(org.kevoree.modeling.api.util.ActionType.REMOVE, org.kevoree.util.Constants.Ref_bindings, this, false, fireEvents)
}
if(hubP!=null) {
hubP.reflexiveMutator(org.kevoree.modeling.api.util.ActionType.ADD, org.kevoree.util.Constants.Ref_bindings, this, false, fireEvents)
}
}
$hub = hubP
if(fireEvents) {
fireModelEvent(org.kevoree.modeling.api.events.ModelEvent(path(), org.kevoree.modeling.api.util.ActionType.SET, org.kevoree.modeling.api.util.ElementAttributeType.REFERENCE, org.kevoree.util.Constants.Ref_hub, hubP))
}
}
}

override fun reflexiveMutator(mutationType : Int, refName : String, value : Any?, setOpposite : Boolean, fireEvents : Boolean) {
when(refName) {
org.kevoree.util.Constants.Att_generated_KMF_ID -> {
this.internal_generated_KMF_ID((value as? String), fireEvents)
}
org.kevoree.util.Constants.Ref_port -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.SET -> {
      this.internal_port(value as? org.kevoree.Port, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_port(null, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD -> {
        this.internal_port(value as? org.kevoree.Port, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.RENEW_INDEX -> {
}
else -> {throw Exception(org.kevoree.util.Constants.UNKNOWN_MUTATION_TYPE_EXCEPTION + mutationType)}
}
}
org.kevoree.util.Constants.Ref_hub -> {
when(mutationType) {
org.kevoree.modeling.api.util.ActionType.SET -> {
      this.internal_hub(value as? org.kevoree.Channel, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.REMOVE -> {
        this.internal_hub(null, setOpposite, fireEvents)
}
org.kevoree.modeling.api.util.ActionType.ADD -> {
        this.internal_hub(value as? org.kevoree.Channel, setOpposite, fireEvents)
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
override fun findByID(relationName:String,idP : String) : org.kevoree.modeling.api.KMFContainer? {when(relationName) {
org.kevoree.util.Constants.Ref_port -> {
val objFound = port
if(objFound!=null && (objFound as org.kevoree.container.KMFContainerImpl).internalGetKey() == idP){
return objFound
}else{return null}
}
org.kevoree.util.Constants.Ref_hub -> {
val objFound = hub
if(objFound!=null && (objFound as org.kevoree.container.KMFContainerImpl).internalGetKey() == idP){
return objFound
}else{return null}
}
else -> {return null}
}
}





override fun visit(visitor : org.kevoree.modeling.api.util.ModelVisitor, recursive : Boolean, containedReference : Boolean,nonContainedReference : Boolean){
            visitor.beginVisitElem(this)
                                                                                                           if(nonContainedReference){
                                                                            visitor.beginVisitRef(org.kevoree.util.Constants.Ref_port, org.kevoree.util.Constants.org_kevoree_Port)
                                                    internal_visit(visitor,port,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_port)
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_port)
                                                                                                        visitor.beginVisitRef(org.kevoree.util.Constants.Ref_hub, org.kevoree.util.Constants.org_kevoree_Channel)
                                                    internal_visit(visitor,hub,recursive,containedReference,nonContainedReference,org.kevoree.util.Constants.Ref_hub)
                                                visitor.endVisitRef(org.kevoree.util.Constants.Ref_hub)
                                                          }
                      visitor.endVisitElem(this)
}

override fun visitAttributes(visitor : org.kevoree.modeling.api.util.ModelAttributeVisitor){
            visitor.visit(generated_KMF_ID,org.kevoree.util.Constants.Att_generated_KMF_ID,this)
    }
override fun metaClassName() : String {
return org.kevoree.util.Constants.org_kevoree_MBinding;
}
override public fun getGenerated_KMF_ID() : String? { return generated_KMF_ID}
override public fun setGenerated_KMF_ID(internal_p : String?) { generated_KMF_ID = internal_p }
override public fun getPort() : org.kevoree.Port?{ return port}
override public fun setPort(internal_p : org.kevoree.Port?){ port = internal_p }
override public fun getHub() : org.kevoree.Channel?{ return hub}
override public fun setHub(internal_p : org.kevoree.Channel?){ hub = internal_p }
}
