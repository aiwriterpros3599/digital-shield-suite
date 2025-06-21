
import React, { useState } from 'react';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useTheme } from '@/hooks/useTheme';
import { useToast } from '@/hooks/use-toast';
import { 
  Shield, 
  FileText, 
  Download, 
  Copy, 
  Trash2, 
  Gift,
  User,
  Copyright,
  AlertTriangle,
  Server,
  Eye,
  CheckCircle
} from 'lucide-react';

const DmcaTakedown = () => {
  const { theme } = useTheme();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    ownerName: '',
    ownerTitle: '',
    ownerCompany: '',
    ownerEmail: '',
    ownerAddress: '',
    ownerPhone: '',
    workDescription: '',
    originalLocation: '',
    infringingUrls: '',
    infringementDescription: '',
    providerName: '',
    providerEmail: ''
  });

  const [generatedNotice, setGeneratedNotice] = useState('');

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const validateForm = () => {
    const requiredFields = [
      'ownerName', 'ownerEmail', 'ownerAddress', 'workDescription', 
      'infringingUrls', 'infringementDescription', 'providerName', 'providerEmail'
    ];
    
    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        toast({
          title: "Required Field Missing",
          description: `Please fill in: ${field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}`,
          variant: "destructive"
        });
        return false;
      }
    }
    return true;
  };

  const generateNotice = () => {
    if (!validateForm()) return;
    
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const notice = `DMCA TAKEDOWN NOTICE

Date: ${currentDate}

To: ${formData.providerName}
Email: ${formData.providerEmail}

From: ${formData.ownerName}${formData.ownerTitle ? ', ' + formData.ownerTitle : ''}${formData.ownerCompany ? '\n' + formData.ownerCompany : ''}
${formData.ownerAddress}
Email: ${formData.ownerEmail}${formData.ownerPhone ? '\nPhone: ' + formData.ownerPhone : ''}

SUBJECT: DMCA Takedown Notice

Dear ${formData.providerName} DMCA Agent,

I am writing to notify you of intellectual property infringement occurring on your service. I am the copyright owner of the material described below, and I have not authorized its use.

COPYRIGHTED WORK IDENTIFICATION:
${formData.workDescription}${formData.originalLocation ? '\n\nOriginal work location: ' + formData.originalLocation : ''}

INFRINGING MATERIAL IDENTIFICATION:
The following URLs contain material that infringes upon my copyright:

${formData.infringingUrls}

INFRINGEMENT DESCRIPTION:
${formData.infringementDescription}

STATEMENTS AND DECLARATIONS:
I have a good faith belief that the use of the copyrighted material described above is not authorized by the copyright owner, its agent, or the law.

I swear, under penalty of perjury, that the information in this notification is accurate and that I am the copyright owner or am authorized to act on behalf of the copyright owner.

REQUESTED ACTION:
I request that you immediately remove or disable access to the infringing material identified above.

Please confirm receipt of this notice and provide information about the actions taken to address this infringement.

Contact Information:
Name: ${formData.ownerName}
Email: ${formData.ownerEmail}${formData.ownerPhone ? '\nPhone: ' + formData.ownerPhone : ''}

Thank you for your prompt attention to this matter.

Sincerely,
${formData.ownerName}${formData.ownerTitle ? '\n' + formData.ownerTitle : ''}${formData.ownerCompany ? '\n' + formData.ownerCompany : ''}
${currentDate}

---
This notice is submitted in good faith and in accordance with the Digital Millennium Copyright Act (DMCA), 17 U.S.C. § 512(c)(3).`;

    setGeneratedNotice(notice);
    
    toast({
      title: "DMCA Notice Generated",
      description: "Your legally-compliant DMCA notice has been generated successfully.",
    });

    // Scroll to preview
    setTimeout(() => {
      document.getElementById('preview-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedNotice).then(() => {
      toast({
        title: "Copied to Clipboard",
        description: "DMCA notice copied successfully!",
      });
    }).catch(() => {
      toast({
        title: "Copy Failed",
        description: "Please try copying manually.",
        variant: "destructive"
      });
    });
  };

  const downloadNotice = () => {
    const blob = new Blob([generatedNotice], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DMCA_Notice_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download Started",
      description: "Your DMCA notice is being downloaded.",
    });
  };

  const clearForm = () => {
    if (window.confirm('Are you sure you want to clear all form data?')) {
      setFormData({
        ownerName: '',
        ownerTitle: '',
        ownerCompany: '',
        ownerEmail: '',
        ownerAddress: '',
        ownerPhone: '',
        workDescription: '',
        originalLocation: '',
        infringingUrls: '',
        infringementDescription: '',
        providerName: '',
        providerEmail: ''
      });
      setGeneratedNotice('');
      
      toast({
        title: "Form Cleared",
        description: "All form data has been cleared.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <BlogHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Gift className="h-4 w-4" />
            100% Free Tool
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            DMCA Takedown Notice Generator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Create legally-compliant DMCA takedown notices in minutes. Protect your intellectual property with professional documentation that meets all legal requirements.
          </p>
        </div>
      </section>

      {/* SEO Benefits Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Legally Compliant</h3>
              <p className="text-gray-600 dark:text-gray-300">Follows DMCA Section 512(c)(3) requirements exactly</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Format</h3>
              <p className="text-gray-600 dark:text-gray-300">Ready-to-send professional documentation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">IP Protection</h3>
              <p className="text-gray-600 dark:text-gray-300">Defend your copyright and intellectual property</p>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Generate Your DMCA Notice</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* Copyright Owner Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-blue-600">
                  <User className="h-5 w-5" />
                  Copyright Owner Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Full Name <span className="text-red-500">*</span></Label>
                    <Input
                      id="ownerName"
                      value={formData.ownerName}
                      onChange={handleInputChange('ownerName')}
                      placeholder="Your full legal name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ownerTitle">Title/Position</Label>
                    <Input
                      id="ownerTitle"
                      value={formData.ownerTitle}
                      onChange={handleInputChange('ownerTitle')}
                      placeholder="e.g., CEO, Legal Representative"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ownerCompany">Company/Organization</Label>
                    <Input
                      id="ownerCompany"
                      value={formData.ownerCompany}
                      onChange={handleInputChange('ownerCompany')}
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ownerEmail">Email Address <span className="text-red-500">*</span></Label>
                    <Input
                      id="ownerEmail"
                      type="email"
                      value={formData.ownerEmail}
                      onChange={handleInputChange('ownerEmail')}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ownerAddress">Complete Address <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="ownerAddress"
                    value={formData.ownerAddress}
                    onChange={handleInputChange('ownerAddress')}
                    placeholder="Street Address, City, State, ZIP Code, Country"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ownerPhone">Phone Number</Label>
                  <Input
                    id="ownerPhone"
                    type="tel"
                    value={formData.ownerPhone}
                    onChange={handleInputChange('ownerPhone')}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Copyrighted Work Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-blue-600">
                  <Copyright className="h-5 w-5" />
                  Copyrighted Work Information
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="workDescription">Description of Copyrighted Work <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="workDescription"
                    value={formData.workDescription}
                    onChange={handleInputChange('workDescription')}
                    placeholder="Detailed description of your original copyrighted material"
                    rows={4}
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Provide a clear, detailed description of your original work that is being infringed.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="originalLocation">Location of Original Work</Label>
                  <Input
                    id="originalLocation"
                    type="url"
                    value={formData.originalLocation}
                    onChange={handleInputChange('originalLocation')}
                    placeholder="https://yourwebsite.com/original-content"
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    URL where your original work can be found (if applicable).
                  </p>
                </div>
              </div>

              {/* Infringing Material Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-blue-600">
                  <AlertTriangle className="h-5 w-5" />
                  Infringing Material Information
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="infringingUrls">URLs of Infringing Material <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="infringingUrls"
                    value={formData.infringingUrls}
                    onChange={handleInputChange('infringingUrls')}
                    placeholder="https://example.com/infringing-page1&#10;https://example.com/infringing-page2"
                    rows={4}
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    List all URLs where your copyrighted material appears without authorization (one per line).
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="infringementDescription">Description of Infringement <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="infringementDescription"
                    value={formData.infringementDescription}
                    onChange={handleInputChange('infringementDescription')}
                    placeholder="Explain how your copyrighted work is being used without permission"
                    rows={4}
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Explain specifically how your work is being infringed upon.
                  </p>
                </div>
              </div>

              {/* Service Provider Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-blue-600">
                  <Server className="h-5 w-5" />
                  Service Provider Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="providerName">Service Provider Name <span className="text-red-500">*</span></Label>
                    <Input
                      id="providerName"
                      value={formData.providerName}
                      onChange={handleInputChange('providerName')}
                      placeholder="e.g., Google, Facebook, Web Host Company"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="providerEmail">DMCA Contact Email <span className="text-red-500">*</span></Label>
                    <Input
                      id="providerEmail"
                      type="email"
                      value={formData.providerEmail}
                      onChange={handleInputChange('providerEmail')}
                      placeholder="dmca@provider.com"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button onClick={generateNotice} className="flex-1">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate DMCA Notice
                </Button>
                <Button onClick={clearForm} variant="outline" className="flex-1">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Form
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Preview Section */}
      {generatedNotice && (
        <section id="preview-section" className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Eye className="h-6 w-6" />
                  Generated DMCA Notice Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6 font-mono text-sm whitespace-pre-wrap max-h-96 overflow-y-auto mb-6">
                  {generatedNotice}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={copyToClipboard} className="flex-1">
                    <Copy className="h-4 w-4 mr-2" />
                    Copy to Clipboard
                  </Button>
                  <Button onClick={downloadNotice} variant="outline" className="flex-1">
                    <Download className="h-4 w-4 mr-2" />
                    Download as Text
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Legal Disclaimer */}
      <section className="py-12 bg-yellow-50 dark:bg-yellow-900/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Legal Disclaimer</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This tool generates template DMCA notices for informational purposes only. While we ensure compliance with DMCA requirements, 
              we recommend consulting with legal counsel for complex situations or high-value intellectual property matters.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 Brand Protection Toolkit. All rights reserved. This tool is provided free of charge to support intellectual property protection.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DmcaTakedown;
