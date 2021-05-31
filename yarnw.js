#!/usr/bin/env node
"use strict";
const { fork } = require("child_process");
const resolveGlobal = require("resolve-global");
const yarnjs = resolveGlobal("yarn/bin/yarn.js");
const findWorkspaceRoot = require("find-yarn-workspace-root");
const workspaceRoot = findWorkspaceRoot(process.cwd());
fork(yarnjs, process.argv.slice(2), { cwd: workspaceRoot });
