import React, {useRef, useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {Audio} from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';

const MusicPlayer = ({mood, windowHeight}) => {

    const animationRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [sound, setSound] = useState(null);

    const playPause = async () => {
        if (animationRef.current && sound) {
            if (isPlaying) {
                animationRef.current.pause();
                await sound.pauseAsync();
            } else {
                animationRef.current.play();
                await sound.playAsync();
            }
            setIsPlaying((prev) => !prev);
        }
    };

    const lottieSize = windowHeight * 0.23;

    let animationSource: any;
    if (mood === 'ВОССТАНОВЛЕНИЕ') {
        animationSource = require('../assets/bubble.json');
    } else if (mood === 'БАЛАНС') {
        animationSource = require('../assets/bubble_or.json');
    } else if (mood === 'АКТИВАЦИЯ') {
        animationSource = require('../assets/bubble_gr.json');
    }

    let audioFile: any;
    if (mood === 'ВОССТАНОВЛЕНИЕ') {
        audioFile = require('../assets/music/sample3.mp3');
    } else if (mood === 'БАЛАНС') {
        audioFile = require('../assets/music/sample3.mp3');
    } else if (mood === 'АКТИВАЦИЯ') {
        audioFile = require('../assets/music/sample3.mp3');
    }

    useEffect(() => {
        const loadAudio = async () => {
            try {
                if (sound) {
                    await sound.unloadAsync();
                }
                const {sound: newSound} = await Audio.Sound.createAsync(
                    audioFile
                );
                setSound(newSound);
            } catch (error) {
                console.error('Error loading audio:', error);
            }
        };

        loadAudio();

        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, [mood]);

    useEffect(() => {
        if (animationRef.current && sound) {
            animationRef.current.pause();
            sound.pauseAsync();
            setIsPlaying(false);
        }
    }, [mood]);

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <TouchableOpacity onPress={playPause} style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: lottieSize,
                height: lottieSize,
            }}>
                <LottieView
                    ref={animationRef}
                    source={animationSource}
                    style={{
                        width: lottieSize,
                        height: lottieSize,
                        position: 'absolute',
                        opacity: 0.7,
                    }}
                    loop
                />
                <Icon name={isPlaying ? 'pause' : 'play'} size={30} color="white" style={{position: 'absolute',}}/>
            </TouchableOpacity>
        </View>
    );
};

export default MusicPlayer;
