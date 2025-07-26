import React, { useState, useRef } from 'react';
import { Upload, AlertCircle, Camera, ArrowRight } from 'lucide-react';
import axios from 'axios';

interface WasteIdentificationProps {
  onIdentifySuccess: () => void;
  onSetIdentifiedWasteType: (wasteType: string) => void;
}

const WasteIdentification: React.FC<WasteIdentificationProps> = ({
  onIdentifySuccess,
  onSetIdentifiedWasteType
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const resultRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIdentify = async () => {
    if (!selectedFile) return;

    setIsLoading(true);
    console.log('🔍 Sending image to Azure Custom Vision...');

    const endpoint =
      'https://newsnestapi-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/2cca4833-9e4f-4fa9-8375-e590adcbc767/classify/iterations/Iteration1/image';
    const predictionKey =
      '9kc5VukIYl5V3EqeWlTcJWysZyhmRntC7QXZOzshK7jNWa19eZrWJQQJ99BGACGhslBXJ3w3AAAIACOGbu68';

    try {
      const response = await axios.post(endpoint, selectedFile, {
        headers: {
          'Content-Type': 'application/octet-stream',
          'Prediction-Key': predictionKey,
        },
      });

      const predictions = response.data.predictions;
      if (predictions && predictions.length > 0) {
        const topPrediction = predictions[0];
        const wasteType = topPrediction.tagName.toLowerCase();
        const confidence = (topPrediction.probability * 100).toFixed(2);
        
        setResult(`${topPrediction.tagName} (${confidence}%)`);
        onSetIdentifiedWasteType(wasteType);
        
        // Auto-navigate to conversion ideas after successful identification
        setTimeout(() => {
          resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          onIdentifySuccess();
        }, 2000);
      } else {
        setResult('No predictions returned from model.');
      }
    } catch (error) {
      console.error('❌ Error identifying image:', error);
      setResult('Error classifying image.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Camera className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Identify Your Waste</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Upload a photo of your waste material and let our AI identify it instantly. 
          We'll then show you creative ways to transform it into something useful!
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="mb-8">
          <label className="block text-lg font-semibold text-gray-900 mb-4">
            Upload Waste Image
          </label>

          <div className="flex justify-center px-6 pt-8 pb-8 border-2 border-green-300 border-dashed rounded-xl hover:border-green-400 transition-colors bg-green-50 hover:bg-green-100">
            <div className="space-y-4 text-center">
              <Upload className="mx-auto h-16 w-16 text-green-600" />
              <div className="flex text-lg text-gray-700">
                <label className="relative cursor-pointer bg-white rounded-lg px-4 py-2 font-semibold text-green-600 hover:text-green-500 shadow-sm hover:shadow-md transition-all">
                  <span>Choose a file</span>
                  <input
                    type="file"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleFileSelect}
                  />
                </label>
                <p className="pl-2 self-center">or drag and drop</p>
              </div>
              <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
              <p className="text-xs text-gray-400">
                Supported: Paper, Plastic, Glass, Metal, Textile, Cardboard, Organic waste
              </p>
            </div>
          </div>
        </div>

        {preview && (
          <div className="mb-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
            <img
              src={preview}
              className="max-w-md mx-auto rounded-xl shadow-lg border border-gray-200 cursor-pointer"
              alt="Preview"
            />
          </div>
        )}

        <div className="text-center">
         <button
           onClick={handleIdentify}
           disabled={!selectedFile || isLoading}
           className={`px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 flex items-center mx-auto space-x-3 ${
             !selectedFile || isLoading
               ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
               : 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 transform hover:scale-105 shadow-lg hover:shadow-xl'
           }`}
         >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Identifying...</span>
              </>
            ) : (
              <>
                <Camera className="h-5 w-5" />
                <span>Identify Waste</span>
              </>
            )}
         </button>
        </div>

        {result && (
          <div ref={resultRef} className="mt-8 p-4 bg-green-50 rounded-lg shadow-md border border-green-200">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <AlertCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Identification Result
                </h3>
                <p className="text-gray-700 mb-4">
                  This appears to be: <span className="font-semibold text-green-700">{result}</span>
                </p>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Redirecting to conversion ideas...</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WasteIdentification;
