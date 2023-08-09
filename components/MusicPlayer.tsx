import React, {useRef, useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {Audio} from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
import RegularText from "./Texts/RegularText";

const formatTime = (timeInMillis: number) => {
    const totalSeconds = Math.floor(timeInMillis / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const MusicPlayer = ({mood, windowHeight}) => {

    const animationRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [sound, setSound] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);

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




    useEffect(() => {
        setCurrentTime(0);

        const loadAudio = async () => {
            try {
                if (sound) {
                    await sound.unloadAsync();
                }
                console.log("1");

                const { sound: newSound } = await Audio.Sound.createAsync(
                    { uri: 'http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8' },
                    { shouldPlay: false }
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

        const updateCurrentTime = setInterval(async () => {
            if (isPlaying && sound) {
                const status = await sound.getStatusAsync();
                setCurrentTime(status.positionMillis);
            }
        }, 100);

        return () => {
            clearInterval(updateCurrentTime);
        };
    }, [isPlaying, sound]);

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

            <RegularText textStyles={{
                fontSize: 20,
                color: "#FFFFFF",
                fontWeight: "bold",
                fontFamily: "TenorSans_400Regular",
            }}>{formatTime(currentTime)}</RegularText>

        </View>
    );
};

export default MusicPlayer;
