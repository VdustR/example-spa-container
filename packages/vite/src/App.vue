<script setup lang="ts">
import inspect from "inject-block-toolkit/inspect";
import {
  BOOL_FALSE,
  BOOL_TRUE,
  EMPTY,
  FLOAT,
  FORCE_FLOAT,
  INT,
  NAN,
  STR,
} from "./env";

const inspectValue = inspect({
  EMPTY,
  STR,
  INT,
  FLOAT,
  FORCE_FLOAT,
  NAN,
  BOOL_TRUE,
  BOOL_FALSE,
});
</script>

<template>
  <div>{{ inspectValue }}</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
