import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import RegularText from "../components/Texts/RegularText";

interface MusicPlayerProps {
  trackName: string;
  isRepeatEnabled: boolean;
  isPlaying: boolean;
  onPlayPausePress: () => void;
  onPreviousPress: () => void;
  onNextPress: () => void;
  onRepeatPress: () => void;
  currentTime: string;
  duration: string;
}

const TimeSlider = ({ currentTime, duration }) => {
  const sliderWidth = 200; 
  
  const [minsStr, secStr]=currentTime.split(":");
  const [totminsStr, totsecStr]=duration.split(":");
  const totalTime = parseInt(minsStr) * 60 + parseInt(secStr);
  const totalTimeDur = parseInt(totminsStr) * 60 + parseInt(totsecStr);

  const progress = ( totalTime / totalTimeDur) * sliderWidth;

  return (
    <View style={styles.sliderContainer}>
    
       <RegularText textStyles={{color: "#FFFFFF"}}>{currentTime}</RegularText>
      <View style={[styles.sliderTrack, { width: sliderWidth }]}>
        <View style={[styles.sliderProgress, { width: progress }]} />
      </View>
      <RegularText textStyles={{color: "#FFFFFF"}}>{duration}</RegularText>
    </View>
  );
};

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  trackName,
  isRepeatEnabled,
  isPlaying,
  onPlayPausePress,
  onPreviousPress,
  onNextPress,
  onRepeatPress,
  currentTime,
  duration,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <RegularText textStyles={{color: "rgba(253, 253, 194, 1)"}}> {trackName} </RegularText>
        <Icon name="retweet" size={24} color="white" />
      </View>

      {/* Center */}
      <View style={styles.centerContainer}>
        <TouchableOpacity onPress={onPreviousPress} style={styles.iconButton}>
          <Icon name="backward" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPlayPausePress} style={styles.iconButton}>
          {isPlaying ? (
            <Icon name="pause" size={24} color="white" />
          ) : (
            <Icon name="play" size={24} color="white" />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={onNextPress} style={styles.iconButton}>
          <Icon name="forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
      
      {/* Bottom */}
      <View style={styles.bottomContainer}>
        <TimeSlider currentTime={currentTime} duration={duration} />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 110,
    backgroundColor: 'rgba(14, 83, 80, 0.69)',
    borderRadius: 10,
    paddingHorizontal: 5,
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: 'column',
    alignItems: 'center',
  },
  centerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 5, 
  },
  iconButton: {
    padding: 5, 
  },
  sliderContainer: {
    marginTop: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5, 
  },
  sliderTrack: {
    flex: 1,
    height: 4,
    backgroundColor: 'rgba(37, 52, 64, 1)',
  },
  sliderProgress: {
    height: 4,
    backgroundColor: '#FFFFFF', 
  },
  topContainer: {
    width: "100%",
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 0, 
  },
  bottomContainer: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});

export default MusicPlayer;
