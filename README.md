# KG Test Automation Challenge

## About
Tests Sahibinden  login cases.
              Search and favorite cases.


## Running

```bash
git clone https://github.com/ahmetbabacan8842/kg-challenge.git
cd kg-challenge
mvn clean test
```

## Multi Platform

Also it can be run on Chrome or Firefox if requested, you just need to change the platform from the `src/test/resources/config.json` file or give a JVM parameter to mvn command, for example:
```bash
mvn clean test -Dplatform=firefox
```
