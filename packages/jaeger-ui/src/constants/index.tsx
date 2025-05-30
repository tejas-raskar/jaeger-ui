// Copyright (c) 2017 Uber Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export const TOP_NAV_HEIGHT = 46;

// Max number of services that "Hierarchical Layout" with "dot" layout engine can can render
// Can be configured with "dependencies.dagMaxNumServices"
export const FALLBACK_DAG_MAX_NUM_SERVICES = 500;

// Max number of services that layouts can render without selecting a focal service
export const DAG_MAX_NUM_SERVICES = 1200;
export const FALLBACK_TRACE_NAME = '<trace-without-root-span>';

export const FETCH_DONE = 'FETCH_DONE';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_LOADING = 'FETCH_LOADING';

export const fetchedState = {
  DONE: FETCH_DONE,
  ERROR: FETCH_ERROR,
  LOADING: FETCH_LOADING,
};
