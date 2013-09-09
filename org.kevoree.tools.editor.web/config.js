var config  = {};


config.ENV_PROD     = 'prod',
config.ENV_DEV      = 'dev';
config.environment  = config.ENV_DEV;
config.JARS_PATH    = 'target/';
config.KEV_JAR      = config.JARS_PATH+'org.kevoree.tools.editor.web-1.0.0-SNAPSHOT-jar-with-dependencies.jar';

module.exports = config;
