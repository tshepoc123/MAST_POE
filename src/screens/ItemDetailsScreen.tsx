import React from 'react';
import * as RN from 'react-native';
import Header from '../components/Header';

export default function ItemDetailsScreen({ route, navigation }: any) {
  const { item } = route.params;

  return (
    <RN.View style={styles.container}>
      <Header />
      <RN.ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <RN.View style={styles.content}>
          <RN.View style={styles.courseBadge}>
            <RN.Text style={styles.courseText}>{item.course}</RN.Text>
          </RN.View>
          
          <RN.Text style={styles.name}>{item.name}</RN.Text>
          <RN.Text style={styles.description}>{item.description}</RN.Text>
          
          <RN.View style={styles.priceContainer}>
            <RN.Text style={styles.priceLabel}>Price</RN.Text>
            <RN.Text style={styles.price}>${item.price}</RN.Text>
          </RN.View>
          
          <RN.View style={styles.detailsCard}>
            <RN.Text style={styles.detailsTitle}>Item Details</RN.Text>
            <RN.View style={styles.detailRow}>
              <RN.Text style={styles.detailLabel}>Course:</RN.Text>
              <RN.Text style={styles.detailValue}>{item.course}</RN.Text>
            </RN.View>
            <RN.View style={styles.detailRow}>
              <RN.Text style={styles.detailLabel}>Category:</RN.Text>
              <RN.Text style={styles.detailValue}>{item.course}</RN.Text>
            </RN.View>
          </RN.View>
        </RN.View>
      </RN.ScrollView>
      
      <RN.TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <RN.Text style={styles.backButtonText}>← Back to Menu</RN.Text>
      </RN.TouchableOpacity>
    </RN.View>
  );
}

const styles = RN.StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  scrollView: { flex: 1 },
  content: {
    padding: 20,
  },
  courseBadge: {
    backgroundColor: '#2E8B57',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  courseText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  name: { 
    fontSize: 32, 
    fontWeight: '700', 
    color: '#333',
    marginBottom: 15,
    lineHeight: 38,
  },
  description: { 
    fontSize: 18, 
    color: '#666',
    lineHeight: 26,
    marginBottom: 30,
  },
  priceContainer: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#E9ECEF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  priceLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  price: { 
    fontSize: 36, 
    fontWeight: '700', 
    color: '#2E8B57',
  },
  detailsCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#E9ECEF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F8F9FA',
  },
  detailLabel: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },
  detailValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  backButton: {
    backgroundColor: '#6C757D',
    margin: 20,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});