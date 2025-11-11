import React, { useState } from 'react';
import * as RN from 'react-native';
import { useMenu } from '../context/MenuContext';
import { Course, MenuItem } from '../types';
import { Ionicons } from '@expo/vector-icons';

interface CourseOption {
  name: Course;
  color: string;
}

const COURSES: CourseOption[] = [
  { name: 'Breakfast', color: '#FFD700' },
  { name: 'Light Meals', color: '#00B894' },
  { name: 'Desserts', color: '#816bffff' },
];

interface Props {
  navigation: any;
}

export default function AddItemScreen({ navigation }: Props) {
  const { addItem, removeItem, items } = useMenu();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<Course>('Breakfast');
  const [price, setPrice] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSave = () => {
    if (!name.trim() || !description.trim() || !price.trim()) {
      RN.Alert.alert('Validation Error', 'Please complete all fields');
      return;
    }

    const priceNum = parseFloat(price);
    if (isNaN(priceNum) || priceNum <= 0) {
      RN.Alert.alert('Validation Error', 'Please enter a valid price');
      return;
    }

    const itemToAdd = {
      name: name.trim(),
      description: description.trim(),
      course,
      price: priceNum.toFixed(2),
    } as Omit<MenuItem, 'id'>;

    addItem(itemToAdd);

    RN.Alert.alert('Success!', `"${name}" has been added to your menu!`, [
      { 
        text: 'Excellent', 
        onPress: () => {
          setName('');
          setDescription('');
          setPrice('');
          setCourse('Breakfast');
          setShowForm(false);
        }
      }
    ]);
  };

  const handleRemoveItem = (id: string, name: string) => {
    RN.Alert.alert(
      'Remove Item',
      `Are you sure you want to remove "${name}" from the menu?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => removeItem(id)
        }
      ]
    );
  };

  const renderMenuItem = ({ item }: { item: MenuItem }) => (
    <RN.View style={styles.menuItem}>
      <RN.View style={styles.menuItemContent}>
        <RN.Text style={styles.menuItemName}>{item.name}</RN.Text>
        <RN.View style={styles.menuItemDetails}>
          <RN.Text style={styles.menuItemCourse}>{item.course}</RN.Text>
          <RN.Text style={styles.menuItemPrice}>R {item.price}</RN.Text>
        </RN.View>
        <RN.Text style={styles.menuItemDescription}>{item.description}</RN.Text>
      </RN.View>
      <RN.TouchableOpacity 
        style={styles.deleteButton}
        onPress={() => handleRemoveItem(item.id, item.name)}
      >
        <Ionicons name="trash-outline" size={20} color="#0e0266ff" />
      </RN.TouchableOpacity>
    </RN.View>
  );

  const isFormValid = name.trim().length > 0 && description.trim().length > 0 && price.trim().length > 0 && !isNaN(parseFloat(price));

  return (
    <RN.View style={styles.container}>
      {!showForm ? (
        <>
          {/* Add New Item Button */}
          <RN.TouchableOpacity 
            style={styles.addNewButton}
            onPress={() => setShowForm(true)}
          >
            <Ionicons name="add-circle-outline" size={24} color="#FFFFFF" />
            <RN.Text style={styles.addNewButtonText}>Add New Menu Item</RN.Text>
          </RN.TouchableOpacity>

          {/* Menu Items List */}
          <RN.ScrollView contentContainerStyle={styles.listContainer} showsVerticalScrollIndicator={false}>
            {items.length === 0 ? (
              <RN.View style={styles.emptyState}>
                <RN.Text style={styles.emptyStateTitle}>No Menu Items</RN.Text>
                <RN.Text style={styles.emptyStateText}>
                  Start adding delicious dishes to build your menu!
                </RN.Text>
              </RN.View>
            ) : (
              items.map((it: import('../types').MenuItem) => (
                <React.Fragment key={it.id}>{renderMenuItem({ item: it })}</React.Fragment>
              ))
            )}
          </RN.ScrollView>
        </>
      ) : (
        <RN.ScrollView style={styles.formContainer} showsVerticalScrollIndicator={false}>
          <RN.View style={styles.formHeader}>
            <RN.Text style={styles.title}>Create New Dish</RN.Text>
            <RN.TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setShowForm(false)}
            >
              <Ionicons name="close-circle-outline" size={24} color="#636E72" />
            </RN.TouchableOpacity>
          </RN.View>

          <RN.View style={styles.inputGroup}>
            <RN.Text style={styles.label}>Dish Name</RN.Text>
            <RN.TextInput 
              placeholder="Enter dish name" 
              value={name} 
              onChangeText={setName} 
              style={styles.input} 
              placeholderTextColor="#999"
            />
          </RN.View>
          
          <RN.View style={styles.inputGroup}>
            <RN.Text style={styles.label}>Description</RN.Text>
            <RN.TextInput 
              placeholder="Describe the dish" 
              value={description} 
              onChangeText={setDescription} 
              style={[styles.input, styles.textArea]} 
              multiline
              numberOfLines={4}
              placeholderTextColor="#999"
            />
          </RN.View>
          
          <RN.View style={styles.inputGroup}>
            <RN.Text style={styles.label}>Course Type</RN.Text>
            <RN.View style={styles.courseGrid}>
              {COURSES.map((courseOption) => (
                <RN.TouchableOpacity
                  key={courseOption.name}
                  style={[
                    styles.courseOption,
                    { backgroundColor: courseOption.color + '22' },
                    course === courseOption.name && { borderWidth: 2, borderColor: courseOption.color }
                  ]}
                  onPress={() => setCourse(courseOption.name)}
                >
                  <RN.Text style={[
                    styles.courseText,
                    course === courseOption.name && { color: courseOption.color, fontWeight: '700' }
                  ]}>
                    {courseOption.name}
                  </RN.Text>
                </RN.TouchableOpacity>
              ))}
            </RN.View>
          </RN.View>
          
          <RN.View style={styles.inputGroup}>
            <RN.Text style={styles.label}>Price (R)</RN.Text>
            <RN.TextInput 
              placeholder="0.00" 
              value={price} 
              onChangeText={setPrice} 
              style={styles.input} 
              keyboardType="decimal-pad"
              placeholderTextColor="#999"
            />
          </RN.View>
          
          <RN.View style={styles.buttonGroup}>
            <RN.TouchableOpacity 
              style={styles.cancelButton}
              onPress={() => setShowForm(false)}
            >
              <RN.Text style={styles.cancelButtonText}>Cancel</RN.Text>
            </RN.TouchableOpacity>
            
            <RN.TouchableOpacity 
              style={[styles.saveButton, !isFormValid && styles.saveButtonDisabled]}
              onPress={handleSave}
              disabled={!isFormValid}
            >
              <RN.Text style={styles.saveButtonText}>Add to Menu</RN.Text>
            </RN.TouchableOpacity>
          </RN.View>
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
  formContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 15,
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  formHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2D3436',
  },
  closeButton: {
    padding: 5,
  },
  inputGroup: { 
    marginBottom: 18 
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2D3436',
    marginBottom: 6,
    letterSpacing: 1,
  },
  input: {
    borderWidth: 2,
    borderColor: '#E8E8E8',
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#F9F9F9',
    fontSize: 16,
    color: '#2D3436',
  },
  textArea: {
    height: 90,
    textAlignVertical: 'top',
  },
  courseGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  courseOption: {
    width: '48%',
    padding: 12,
    marginBottom: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  courseText: {
    fontSize: 12,
    color: '#636E72',
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  addNewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1b0260ff',
    margin: 15,
    padding: 15,
    borderRadius: 12,
    justifyContent: 'center',
  },
  addNewButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 8,
  },
  listContainer: {
    padding: 15,
  },
  menuItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#060165ff',
  },
  menuItemContent: {
    flex: 1,
  },
  menuItemName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2D3436',
    marginBottom: 4,
  },
  menuItemDetails: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  menuItemCourse: {
    fontSize: 12,
    color: '#110474ff',
    fontWeight: '600',
    marginRight: 10,
  },
  menuItemPrice: {
    fontSize: 12,
    color: '#16016cff',
    fontWeight: '700',
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#636E72',
  },
  deleteButton: {
    padding: 8,
    justifyContent: 'center',
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2D3436',
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 14,
    color: '#636E72',
    textAlign: 'center',
  },
  cancelButton: {
    flex: 1,
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#B2BEC3',
    marginRight: 10,
    alignItems: 'center',
  },
  saveButton: {
    flex: 2,
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#1c0478ff',
    marginLeft: 10,
    alignItems: 'center',
    shadowColor: '#120377ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
  saveButtonDisabled: {
    backgroundColor: '#CCC',
    shadowColor: '#999',
  },
  cancelButtonText: { color: '#FFF', fontWeight: '600', fontSize: 16 },
  saveButtonText: { color: '#FFF', fontWeight: '700', fontSize: 16 },
});
