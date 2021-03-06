/*
 * Copyright (C) 2008 ZXing authors
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.njfsoft_utils.camcapture;


import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.util.Log;

import java.util.Collection;

 

/**
 * This class handles all the messaging which comprises the state machine for
 * capture.
 * 
 * @author dswitkin@google.com (Daniel Switkin)
 */
public final class DecoderActivityHandler extends Handler {

    private static final String TAG = DecoderActivityHandler.class.getSimpleName();

    IDecoderActivity activity;
 
    CameraManager cameraManager;
    State state;

    enum State {
        PREVIEW, SUCCESS, DONE
    }

    public DecoderActivityHandler(IDecoderActivity activity, String characterSet, CameraManager cameraManager) {
        this.activity = activity;
 
        state = State.SUCCESS;

        // Start ourselves capturing previews and decoding.
        this.cameraManager = cameraManager;
        cameraManager.startPreview();
 
    }

    @Override
    public void handleMessage(Message message) {

       	  System.out.println("handleMessage: ");
        switch (message.what) {
 
          }
 
    }

    public void quitSynchronously() {
        state = State.DONE;

        cameraManager.stopPreview();
 
    }

    void restartPreviewAndDecode() {
             activity.getViewfinder().drawViewfinder();
    }
}
