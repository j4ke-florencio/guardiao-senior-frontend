import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import MicrophoneIcon from './icons/MicrophoneIcon';
import PaperPlaneIcon from './icons/PaperPlaneIcon';
import RecordingIndicator from './RecordingIndicator';
import StopIcon from './icons/StopIcon';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  size?: 'normal' | 'large';
}
type RecordingStatus = 'idle' | 'recording' | 'transcribing';
const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading, size = 'normal' }) => {
  const [inputValue, setInputValue] = useState('');
  const [recordingStatus, setRecordingStatus] = useState<RecordingStatus>('idle');
  const [recordingTime, setRecordingTime] = useState(0);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerIntervalRef = useRef<number | null>(null);
  const isLarge = size === 'large';
  const hasText = inputValue.trim().length > 0;
  const isRecording = recordingStatus === 'recording';
  const handleSend = () => {
    if (hasText && !isLoading) {
      onSendMessage(inputValue.trim());
      setInputValue('');
    }
  };
  const handleKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];
      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };
      mediaRecorderRef.current.onstop = async () => {
        setRecordingStatus('transcribing');
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        try {
          console.warn("WIP: Transcrição de áudio capturada. API não implementada.", audioBlob);
          onSendMessage("Desculpe, a funcionalidade de áudio ainda não está pronta.");
        } catch (error) {
          console.error('Transcription failed:', error);
          onSendMessage("Desculpe, não consegui entender o áudio. Tente novamente.");
        } finally {
          setRecordingStatus('idle');
        }
      };
      mediaRecorderRef.current.start();
      setRecordingStatus('recording');
      timerIntervalRef.current = window.setInterval(() => {
        setRecordingTime(prevTime => prevTime + 1);
      }, 1000);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Não foi possível acessar o microfone. Por favor, verifique as permissões do seu navegador.");
      setRecordingStatus('idle');
    }
  };
  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
      setRecordingTime(0);
    }
  };
  const handleRecordButtonClick = () => {
    if (isLoading) return;
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };
  useEffect(() => {
    const textArea = textAreaRef.current;
    if (textArea) {
      textArea.style.height = 'auto';
      const scrollHeight = textArea.scrollHeight;
      textArea.style.height = `${scrollHeight}px`;
    }
  }, [inputValue]);
  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, []);
  
  return (

    <div className={`pt-1 ${size === 'large' ? 'pb-4' : ''}`}>
      <div className="w-full flex items-center gap-3 bg-white p-4 rounded-xl shadow-soft">
        
        {isRecording ? (
            <RecordingIndicator recordingTime={recordingTime} />
        ) : (
            <textarea
              ref={textAreaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escreva sua dúvida ou grave um áudio..."
              className={`flex-1 bg-transparent border-none focus:ring-0 resize-none p-2 placeholder-guardiao-cinza-medio text-black outline-none max-h-40 ${isLarge ? 'text-2xl' : 'text-xl'}`}
              rows={1}
              disabled={isLoading || recordingStatus !== 'idle'}
            />
        )}
        
        <button
          onClick={hasText ? handleSend : handleRecordButtonClick}
          disabled={isLoading || recordingStatus === 'transcribing'}
          className={`flex-shrink-0 flex items-center justify-center rounded-full text-white disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95 ${isRecording ? 'bg-red-500' : 'bg-guardiao-azul'} ${isLarge ? 'w-20 h-20' : 'w-16 h-16'}`}
          aria-label={hasText ? "Enviar mensagem" : isRecording ? "Parar gravação" : "Gravar mensagem de voz"}
        >
          {isLoading || recordingStatus === 'transcribing' ? (
              <span className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
          ) : hasText ? (
            <PaperPlaneIcon />
          ) : isRecording ? (
            <StopIcon />
          ) : (
            <MicrophoneIcon />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatInput;