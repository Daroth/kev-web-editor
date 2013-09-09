







package org.kevoree.impl;

import org.kevoree.KevoreeFactory;
import org.kevoree.ComponentInstance;
import org.kevoree.ComponentType;
import org.kevoree.ContainerNode;
import org.kevoree.ContainerRoot;
import org.kevoree.Port;
import org.kevoree.Namespace;
import org.kevoree.Dictionary;
import org.kevoree.DictionaryType;
import org.kevoree.DictionaryAttribute;
import org.kevoree.DictionaryValue;
import org.kevoree.CompositeType;
import org.kevoree.PortTypeRef;
import org.kevoree.Wire;
import org.kevoree.ServicePortType;
import org.kevoree.Operation;
import org.kevoree.Parameter;
import org.kevoree.TypedElement;
import org.kevoree.MessagePortType;
import org.kevoree.Repository;
import org.kevoree.DeployUnit;
import org.kevoree.TypeLibrary;
import org.kevoree.NamedElement;
import org.kevoree.IntegrationPattern;
import org.kevoree.ExtraFonctionalProperty;
import org.kevoree.PortTypeMapping;
import org.kevoree.Channel;
import org.kevoree.MBinding;
import org.kevoree.NodeNetwork;
import org.kevoree.NodeLink;
import org.kevoree.NetworkProperty;
import org.kevoree.ChannelType;
import org.kevoree.Instance;
import org.kevoree.Group;
import org.kevoree.GroupType;
import org.kevoree.NodeType;
import org.kevoree.AdaptationPrimitiveType;
import org.kevoree.AdaptationPrimitiveTypeRef;

 class DefaultKevoreeFactory : KevoreeFactory {

override fun getVersion() : String { return "2.0.12-SNAPSHOT" }

override fun createComponentInstance() : ComponentInstance { return ComponentInstanceImpl() }
override fun createComponentType() : ComponentType { return ComponentTypeImpl() }
override fun createContainerNode() : ContainerNode { return ContainerNodeImpl() }
override fun createContainerRoot() : ContainerRoot { return ContainerRootImpl() }
override fun createPort() : Port { return PortImpl() }
override fun createNamespace() : Namespace { return NamespaceImpl() }
override fun createDictionary() : Dictionary { return DictionaryImpl() }
override fun createDictionaryType() : DictionaryType { return DictionaryTypeImpl() }
override fun createDictionaryAttribute() : DictionaryAttribute { return DictionaryAttributeImpl() }
override fun createDictionaryValue() : DictionaryValue { return DictionaryValueImpl() }
override fun createCompositeType() : CompositeType { return CompositeTypeImpl() }
override fun createPortTypeRef() : PortTypeRef { return PortTypeRefImpl() }
override fun createWire() : Wire { return WireImpl() }
override fun createServicePortType() : ServicePortType { return ServicePortTypeImpl() }
override fun createOperation() : Operation { return OperationImpl() }
override fun createParameter() : Parameter { return ParameterImpl() }
override fun createTypedElement() : TypedElement { return TypedElementImpl() }
override fun createMessagePortType() : MessagePortType { return MessagePortTypeImpl() }
override fun createRepository() : Repository { return RepositoryImpl() }
override fun createDeployUnit() : DeployUnit { return DeployUnitImpl() }
override fun createTypeLibrary() : TypeLibrary { return TypeLibraryImpl() }
override fun createNamedElement() : NamedElement { return NamedElementImpl() }
override fun createIntegrationPattern() : IntegrationPattern { return IntegrationPatternImpl() }
override fun createExtraFonctionalProperty() : ExtraFonctionalProperty { return ExtraFonctionalPropertyImpl() }
override fun createPortTypeMapping() : PortTypeMapping { return PortTypeMappingImpl() }
override fun createChannel() : Channel { return ChannelImpl() }
override fun createMBinding() : MBinding { return MBindingImpl() }
override fun createNodeNetwork() : NodeNetwork { return NodeNetworkImpl() }
override fun createNodeLink() : NodeLink { return NodeLinkImpl() }
override fun createNetworkProperty() : NetworkProperty { return NetworkPropertyImpl() }
override fun createChannelType() : ChannelType { return ChannelTypeImpl() }
override fun createInstance() : Instance { return InstanceImpl() }
override fun createGroup() : Group { return GroupImpl() }
override fun createGroupType() : GroupType { return GroupTypeImpl() }
override fun createNodeType() : NodeType { return NodeTypeImpl() }
override fun createAdaptationPrimitiveType() : AdaptationPrimitiveType { return AdaptationPrimitiveTypeImpl() }
override fun createAdaptationPrimitiveTypeRef() : AdaptationPrimitiveTypeRef { return AdaptationPrimitiveTypeRefImpl() }

override fun create(metaClassName : String) : org.kevoree.modeling.api.KMFContainer? {
      when(metaClassName){
            org.kevoree.util.Constants.org_kevoree_ComponentInstance -> { return createComponentInstance() }
            org.kevoree.util.Constants.CN_ComponentInstance -> { return createComponentInstance() }

            org.kevoree.util.Constants.org_kevoree_ComponentType -> { return createComponentType() }
            org.kevoree.util.Constants.CN_ComponentType -> { return createComponentType() }

            org.kevoree.util.Constants.org_kevoree_ContainerNode -> { return createContainerNode() }
            org.kevoree.util.Constants.CN_ContainerNode -> { return createContainerNode() }

            org.kevoree.util.Constants.org_kevoree_ContainerRoot -> { return createContainerRoot() }
            org.kevoree.util.Constants.CN_ContainerRoot -> { return createContainerRoot() }

            org.kevoree.util.Constants.org_kevoree_Port -> { return createPort() }
            org.kevoree.util.Constants.CN_Port -> { return createPort() }

            org.kevoree.util.Constants.org_kevoree_Namespace -> { return createNamespace() }
            org.kevoree.util.Constants.CN_Namespace -> { return createNamespace() }

            org.kevoree.util.Constants.org_kevoree_Dictionary -> { return createDictionary() }
            org.kevoree.util.Constants.CN_Dictionary -> { return createDictionary() }

            org.kevoree.util.Constants.org_kevoree_DictionaryType -> { return createDictionaryType() }
            org.kevoree.util.Constants.CN_DictionaryType -> { return createDictionaryType() }

            org.kevoree.util.Constants.org_kevoree_DictionaryAttribute -> { return createDictionaryAttribute() }
            org.kevoree.util.Constants.CN_DictionaryAttribute -> { return createDictionaryAttribute() }

            org.kevoree.util.Constants.org_kevoree_DictionaryValue -> { return createDictionaryValue() }
            org.kevoree.util.Constants.CN_DictionaryValue -> { return createDictionaryValue() }

            org.kevoree.util.Constants.org_kevoree_CompositeType -> { return createCompositeType() }
            org.kevoree.util.Constants.CN_CompositeType -> { return createCompositeType() }

            org.kevoree.util.Constants.org_kevoree_PortTypeRef -> { return createPortTypeRef() }
            org.kevoree.util.Constants.CN_PortTypeRef -> { return createPortTypeRef() }

            org.kevoree.util.Constants.org_kevoree_Wire -> { return createWire() }
            org.kevoree.util.Constants.CN_Wire -> { return createWire() }

            org.kevoree.util.Constants.org_kevoree_ServicePortType -> { return createServicePortType() }
            org.kevoree.util.Constants.CN_ServicePortType -> { return createServicePortType() }

            org.kevoree.util.Constants.org_kevoree_Operation -> { return createOperation() }
            org.kevoree.util.Constants.CN_Operation -> { return createOperation() }

            org.kevoree.util.Constants.org_kevoree_Parameter -> { return createParameter() }
            org.kevoree.util.Constants.CN_Parameter -> { return createParameter() }

            org.kevoree.util.Constants.org_kevoree_TypedElement -> { return createTypedElement() }
            org.kevoree.util.Constants.CN_TypedElement -> { return createTypedElement() }

            org.kevoree.util.Constants.org_kevoree_MessagePortType -> { return createMessagePortType() }
            org.kevoree.util.Constants.CN_MessagePortType -> { return createMessagePortType() }

            org.kevoree.util.Constants.org_kevoree_Repository -> { return createRepository() }
            org.kevoree.util.Constants.CN_Repository -> { return createRepository() }

            org.kevoree.util.Constants.org_kevoree_DeployUnit -> { return createDeployUnit() }
            org.kevoree.util.Constants.CN_DeployUnit -> { return createDeployUnit() }

            org.kevoree.util.Constants.org_kevoree_TypeLibrary -> { return createTypeLibrary() }
            org.kevoree.util.Constants.CN_TypeLibrary -> { return createTypeLibrary() }

            org.kevoree.util.Constants.org_kevoree_NamedElement -> { return createNamedElement() }
            org.kevoree.util.Constants.CN_NamedElement -> { return createNamedElement() }

            org.kevoree.util.Constants.org_kevoree_IntegrationPattern -> { return createIntegrationPattern() }
            org.kevoree.util.Constants.CN_IntegrationPattern -> { return createIntegrationPattern() }

            org.kevoree.util.Constants.org_kevoree_ExtraFonctionalProperty -> { return createExtraFonctionalProperty() }
            org.kevoree.util.Constants.CN_ExtraFonctionalProperty -> { return createExtraFonctionalProperty() }

            org.kevoree.util.Constants.org_kevoree_PortTypeMapping -> { return createPortTypeMapping() }
            org.kevoree.util.Constants.CN_PortTypeMapping -> { return createPortTypeMapping() }

            org.kevoree.util.Constants.org_kevoree_Channel -> { return createChannel() }
            org.kevoree.util.Constants.CN_Channel -> { return createChannel() }

            org.kevoree.util.Constants.org_kevoree_MBinding -> { return createMBinding() }
            org.kevoree.util.Constants.CN_MBinding -> { return createMBinding() }

            org.kevoree.util.Constants.org_kevoree_NodeNetwork -> { return createNodeNetwork() }
            org.kevoree.util.Constants.CN_NodeNetwork -> { return createNodeNetwork() }

            org.kevoree.util.Constants.org_kevoree_NodeLink -> { return createNodeLink() }
            org.kevoree.util.Constants.CN_NodeLink -> { return createNodeLink() }

            org.kevoree.util.Constants.org_kevoree_NetworkProperty -> { return createNetworkProperty() }
            org.kevoree.util.Constants.CN_NetworkProperty -> { return createNetworkProperty() }

            org.kevoree.util.Constants.org_kevoree_ChannelType -> { return createChannelType() }
            org.kevoree.util.Constants.CN_ChannelType -> { return createChannelType() }

            org.kevoree.util.Constants.org_kevoree_Instance -> { return createInstance() }
            org.kevoree.util.Constants.CN_Instance -> { return createInstance() }

            org.kevoree.util.Constants.org_kevoree_Group -> { return createGroup() }
            org.kevoree.util.Constants.CN_Group -> { return createGroup() }

            org.kevoree.util.Constants.org_kevoree_GroupType -> { return createGroupType() }
            org.kevoree.util.Constants.CN_GroupType -> { return createGroupType() }

            org.kevoree.util.Constants.org_kevoree_NodeType -> { return createNodeType() }
            org.kevoree.util.Constants.CN_NodeType -> { return createNodeType() }

            org.kevoree.util.Constants.org_kevoree_AdaptationPrimitiveType -> { return createAdaptationPrimitiveType() }
            org.kevoree.util.Constants.CN_AdaptationPrimitiveType -> { return createAdaptationPrimitiveType() }

            org.kevoree.util.Constants.org_kevoree_AdaptationPrimitiveTypeRef -> { return createAdaptationPrimitiveTypeRef() }
            org.kevoree.util.Constants.CN_AdaptationPrimitiveTypeRef -> { return createAdaptationPrimitiveTypeRef() }

            else -> {return null;}
       }
}


}