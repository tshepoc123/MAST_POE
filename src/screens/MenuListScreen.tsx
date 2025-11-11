import React, { useState, useEffect } from 'react';
import * as RN from 'react-native';
import { useMenu } from '../context/MenuContext';
import { Course, MenuItem } from '../types';

const COURSES: Course[] = ['Breakfast', 'Light Meals', 'Desserts'];

export default function MenuListScreen({ navigation, route }: any) {
  const { items, getItemsByCourse } = useMenu();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Handle course selection from home screen
  useEffect(() => {
    if (route.params?.selectedCourse) {
      setSelectedCourse(route.params.selectedCourse);
    }
  }, [route.params?.selectedCourse]);

  // Filter items based on selected course
  const filteredItems = selectedCourse ? getItemsByCourse(selectedCourse) : items;

  const renderItem = (item: MenuItem) => (
      <RN.TouchableOpacity
      key={item.id}
      style={styles.menuItem}
      onPress={() => navigation.navigate('ItemDetails', { item })}
      >
        <RN.View style={styles.itemContent}>
          <RN.View style={styles.itemMain}>
            <RN.Text style={styles.itemName}>{item.name}</RN.Text>
            <RN.Text style={styles.itemCourse}>{item.course}</RN.Text>
            <RN.Text style={styles.itemDescription}>{item.description}</RN.Text>
          </RN.View>
          <RN.View style={styles.itemSide}>
            <RN.Text style={styles.itemPrice}>R{item.price}</RN.Text>
            <RN.View style={styles.addedIndicator}>
              <RN.Text style={styles.addedText}>✓</RN.Text>
            </RN.View>
          </RN.View>
        </RN.View>
      </RN.TouchableOpacity>
  );

  return (
    <RN.View style={styles.container}>
      {/* Course Filter Tabs */}
      <RN.View style={styles.filterContainer}>
        <RN.ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScroll}
        >
          <RN.TouchableOpacity
            style={[
              styles.filterTab,
              selectedCourse === null && styles.filterTabActive
            ]}
            onPress={() => setSelectedCourse(null)}
          >
            <RN.Text style={[
              styles.filterText,
              selectedCourse === null && styles.filterTextActive
            ]}>All</RN.Text>
          </RN.TouchableOpacity>

          {COURSES.map((course) => (
            <RN.TouchableOpacity
              key={course}
              style={[
                styles.filterTab,
                selectedCourse === course && styles.filterTabActive
              ]}
              onPress={() => setSelectedCourse(course)}
            >
              <RN.Text style={[
                styles.filterText,
                selectedCourse === course && styles.filterTextActive
              ]}>{course}</RN.Text>
            </RN.TouchableOpacity>
          ))}
        </RN.ScrollView>
      </RN.View>

      {/* Menu Items List */}
      {filteredItems.length === 0 ? (
          <RN.View style={styles.emptyState}>
          <RN.Text style={styles.emptyTitle}>
            {selectedCourse ? `No ${selectedCourse} dishes yet` : 'No dishes added yet'}
          </RN.Text>
          <RN.Text style={styles.emptyText}>
            {selectedCourse 
              ? `Add some ${selectedCourse.toLowerCase()} items to your menu!`
              : 'Start adding your culinary creations to build your menu!'
            }
          </RN.Text>
          </RN.View>
        ) : (
          <RN.ScrollView contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
          {filteredItems.map((item: import('../types').MenuItem) => (
            <React.Fragment key={item.id}>{renderItem(item)}</React.Fragment>
          ))}
        </RN.ScrollView>
      )}
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F8F9FA' 
  },

  filterContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  filterScroll: {
    paddingHorizontal: 15,
  },

  filterTab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#F1F3F5',
  },

  filterTabActive: {
    backgroundColor: '#0f0360ff',
  },

  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#636E72',
  },

  filterTextActive: {
    color: '#FFFFFF',
  },

  listContent: { 
    padding: 15, 
    paddingBottom: 30 
  },

  menuItem: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
    borderLeftWidth: 6,
    borderLeftColor: '#0f0360ff',
  },

  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  itemMain: {
    flex: 1,
    marginRight: 15,
  },

  itemName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2D3436',
    marginBottom: 2,
  },

  itemCourse: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0f0360ff',
    marginBottom: 4,
    textTransform: 'uppercase',
  },

  itemDescription: {
    fontSize: 13,
    color: '#636E72',
    lineHeight: 18,
  },

  itemSide: {
    alignItems: 'flex-end',
  },

  itemPrice: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0f0360ff',
    marginBottom: 8,
  },

  addedIndicator: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#0f0360ff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addedText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },

  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#636E72',
    marginBottom: 10,
    textAlign: 'center',
  },

  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    lineHeight: 22,
  },
});
