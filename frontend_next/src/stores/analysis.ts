/********************************************************************************
 * Copyright (c) 2023 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0
 *
 * SPDX-License-Identifier: EPL-2.0
 ********************************************************************************/
import { type FileType } from '@/composables/file-types';
import { defineStore } from 'pinia';

export const useAnalysisStore = defineStore('analysis', {
  state: () => ({
    fileType: null as FileType | null,
    target: '',

    leaveGuard: true
  }),

  actions: {
    set(fileType: FileType, target: string) {
      this.fileType = fileType;
      this.target = target;
    }
  }
});