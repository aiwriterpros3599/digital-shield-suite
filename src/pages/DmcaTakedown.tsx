import React, { useState } from 'react';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Copy, 
  Download, 
  User, 
  Copyright, 
  AlertTriangle, 
  Server, 
  Eye,
  Gift,
  Trash2
} from 'lucide-react';

const DmcaTakedown = () => {
  const [noticeData, setNoticeData] = useState({
    date: new Date().toLocaleDateString(),
    senderName: '',
    senderTitle: '',
    senderCompany: '',
    senderAddress: '',
    senderCity: '',
    senderState: '',
    senderZip: '',
    senderCountry: '',
    senderEmail: '',
    senderPhone: '',
    recipientName: '',
    recipientTitle: '',
    recipientCompany: '',
    recipientAddress: '',
    recipientCity: '',
    recipientState: '',
    recipientZip: '',
    recipientCountry: '',
    infringedWorkTitle: '',
    infringedWorkUrl: '',
    originalWorkLocation: '',
    infringingMaterialLocation: '',
    statementOfAuthority: true,
    statementOfGoodFaith: true,
    signature: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNoticeData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process the DMCA takedown notice data here (e.g., generate a document, send an email, etc.)
    console.log('DMCA Takedown Notice Data:', noticeData);
    alert('DMCA Takedown Notice generated! Check the console for the data.');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <BlogHeader />
      
      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="text-center mb-8">
          <Badge className="mb-4 bg-green-500 hover:bg-green-600">
            <Gift className="h-4 w-4 mr-2" />
            100% Free Tool
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            DMCA Takedown Notice Generator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Create legally-compliant DMCA takedown notices in minutes. Protect your intellectual property with professional documentation.
          </p>
        </section>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Sender Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Sender Information
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Date</label>
                <Input
                  type="text"
                  name="date"
                  value={noticeData.date}
                  readOnly
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <Input
                  type="text"
                  name="senderName"
                  value={noticeData.senderName}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                <Input
                  type="text"
                  name="senderTitle"
                  value={noticeData.senderTitle}
                  onChange={handleChange}
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company</label>
                <Input
                  type="text"
                  name="senderCompany"
                  value={noticeData.senderCompany}
                  onChange={handleChange}
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Address</label>
                <Input
                  type="text"
                  name="senderAddress"
                  value={noticeData.senderAddress}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">City</label>
                <Input
                  type="text"
                  name="senderCity"
                  value={noticeData.senderCity}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">State</label>
                <Input
                  type="text"
                  name="senderState"
                  value={noticeData.senderState}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">ZIP</label>
                <Input
                  type="text"
                  name="senderZip"
                  value={noticeData.senderZip}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Country</label>
                <Input
                  type="text"
                  name="senderCountry"
                  value={noticeData.senderCountry}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <Input
                  type="email"
                  name="senderEmail"
                  value={noticeData.senderEmail}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                <Input
                  type="tel"
                  name="senderPhone"
                  value={noticeData.senderPhone}
                  onChange={handleChange}
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
            </CardContent>
          </Card>

          {/* Recipient Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                Recipient Information
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <Input
                  type="text"
                  name="recipientName"
                  value={noticeData.recipientName}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                <Input
                  type="text"
                  name="recipientTitle"
                  value={noticeData.recipientTitle}
                  onChange={handleChange}
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company</label>
                <Input
                  type="text"
                  name="recipientCompany"
                  value={noticeData.recipientCompany}
                  onChange={handleChange}
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Address</label>
                <Input
                  type="text"
                  name="recipientAddress"
                  value={noticeData.recipientAddress}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">City</label>
                <Input
                  type="text"
                  name="recipientCity"
                  value={noticeData.recipientCity}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">State</label>
                <Input
                  type="text"
                  name="recipientState"
                  value={noticeData.recipientState}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">ZIP</label>
                <Input
                  type="text"
                  name="recipientZip"
                  value={noticeData.recipientZip}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Country</label>
                <Input
                  type="text"
                  name="recipientCountry"
                  value={noticeData.recipientCountry}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
            </CardContent>
          </Card>

          {/* Infringement Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Copyright className="h-5 w-5" />
                Infringement Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title of Infringed Work</label>
                <Input
                  type="text"
                  name="infringedWorkTitle"
                  value={noticeData.infringedWorkTitle}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">URL of Infringed Work</label>
                <Input
                  type="url"
                  name="infringedWorkUrl"
                  value={noticeData.infringedWorkUrl}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location of Original Work</label>
                <Input
                  type="url"
                  name="originalWorkLocation"
                  value={noticeData.originalWorkLocation}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location of Infringing Material</label>
                <Input
                  type="url"
                  name="infringingMaterialLocation"
                  value={noticeData.infringingMaterialLocation}
                  onChange={handleChange}
                  required
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
            </CardContent>
          </Card>

          {/* Legal Statements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Legal Statements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="statementOfAuthority"
                  name="statementOfAuthority"
                  checked={noticeData.statementOfAuthority}
                  onChange={() => setNoticeData(prevData => ({ ...prevData, statementOfAuthority: !prevData.statementOfAuthority }))}
                  className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label htmlFor="statementOfAuthority" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  I have a good faith belief that use of the copyrighted materials described above as allegedly infringing is not authorized by the copyright owner, its agent, or the law.
                </label>
              </div>
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="statementOfGoodFaith"
                  name="statementOfGoodFaith"
                  checked={noticeData.statementOfGoodFaith}
                  onChange={() => setNoticeData(prevData => ({ ...prevData, statementOfGoodFaith: !prevData.statementOfGoodFaith }))}
                  className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label htmlFor="statementOfGoodFaith" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  I swear, under penalty of perjury, that the information in the notification is accurate and that I am the copyright owner or am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Signature */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Signature
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                name="signature"
                value={noticeData.signature}
                onChange={handleChange}
                placeholder="Type your full name to sign"
                required
                className="dark:bg-gray-800 dark:border-gray-700 min-h-[100px]"
              />
            </CardContent>
          </Card>

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Generate DMCA Takedown Notice
          </Button>
        </form>
      </main>
    </div>
  );
};

export default DmcaTakedown;
