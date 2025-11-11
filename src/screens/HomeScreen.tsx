import React from 'react';
import * as RN from 'react-native';
import { useMenu } from '../context/MenuContext';
import { Course } from '../types';

const COURSES: Course[] = ['Breakfast', 'Light Meals', 'Desserts'];

export default function HomeScreen({ navigation }: any) {
  const { items, getTotalItems, getItemsByCourse, getAveragePriceByCourse } = useMenu();

  return (
    <RN.View style={styles.container}>
      {/* HEADER */}
      <RN.View style={styles.header}>
        <RN.Image 
          source={require('../assets/images/myP.png')}
          style={styles.logo}
        />
        <RN.View style={styles.headerText}>
          <RN.Text style={styles.restaurantName}>Christoffel's Cuisine</RN.Text>
          <RN.View style={styles.counterWrapper}>
            <RN.Text style={styles.counterLabel}>Total Menu Items</RN.Text>
            <RN.Text style={styles.counterNumber}>{getTotalItems()}</RN.Text>
          </RN.View>
        </RN.View>
      </RN.View>

      {/* MENU STATS */}
      <RN.ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <RN.Text style={styles.sectionTitle}>Menu Overview</RN.Text>
        
        {COURSES.map((course) => {
          const courseItems = getItemsByCourse(course);
          const averagePrice = getAveragePriceByCourse(course);
          
          return (
            <RN.View key={course} style={styles.courseCard}>
              <RN.View style={styles.courseHeader}>
                <RN.Text style={styles.courseName}>{course}</RN.Text>
                <RN.Text style={styles.itemCount}>{courseItems.length} items</RN.Text>
              </RN.View>
              
              <RN.View style={styles.statsRow}>
                <RN.View style={styles.statBox}>
                  <RN.Text style={styles.statLabel}>Average Price</RN.Text>
                  <RN.Text style={styles.statValue}>
                    R {averagePrice.toFixed(2)}
                  </RN.Text>
                </RN.View>
              </RN.View>

              <RN.TouchableOpacity 
                style={styles.viewButton}
                onPress={() => navigation.navigate('My Menu', { selectedCourse: course })}
              >
                <RN.Text style={styles.viewButtonText}>View Items</RN.Text>
              </RN.TouchableOpacity>
            </RN.View>
          );
        })}
      </RN.ScrollView>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F8F9FA' 
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 15,
    padding: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#0f0360ff',
  },
  headerText: {
    flex: 1,
    marginLeft: 15,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#2D3436',
    marginBottom: 8,
  },
  counterWrapper: {
    flexDirection: 'row',
    backgroundColor: '#0f0360ff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  counterLabel: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    marginRight: 8,
  },
  counterNumber: {
    fontSize: 16,
    fontWeight: '800',
    color: '#fff',
    backgroundColor: '#fff3',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2D3436',
    marginBottom: 20,
  },
  courseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderLeftWidth: 6,
    borderLeftColor: '#0f0360ff',
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  courseName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2D3436',
  },
  itemCount: {
    fontSize: 14,
    color: '#636E72',
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  statBox: {
    backgroundColor: '#F8F9FA',
    padding: 15,
    borderRadius: 12,
    flex: 1,
  },
  statLabel: {
    fontSize: 12,
    color: '#636E72',
    marginBottom: 4,
    fontWeight: '600',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0f0360ff',
  },
  viewButton: {
    backgroundColor: '#0f0360ff',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});
